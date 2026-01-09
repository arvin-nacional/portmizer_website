"use server";

import { FilterQuery } from "mongoose";
import { connectToDatabase } from "../mongoose";
import { GetPostsByTagIdParams } from "./shared.types";
import Tag, { ITag } from "@/database/tag.model";
import { unstable_cache } from "next/cache";

async function getPostsByTagIdFromDB(tagIds: Object[], currentPostId: string) {
  try {
    await connectToDatabase();

    const tagFilter: FilterQuery<ITag> = { _id: { $in: tagIds } };

    const tags = await Tag.find(tagFilter)
      .populate({
        path: "posts",
        select: "title image createdAt",
        options: {
          sort: { createdAt: -1 },
          limit: 6,
        },
      })
      .lean();

    // Collect all posts from the found tags
    let posts = tags.flatMap((tag: any) => tag.posts);

    // Remove duplicates using Map
    const postMap = new Map();
    posts.forEach((post: any) => {
      if (!postMap.has(post._id.toString())) {
        postMap.set(post._id.toString(), post);
      }
    });
    posts = Array.from(postMap.values());

    // Filter out the currentPostId and limit to 4
    posts = posts
      .filter((post: any) => post._id.toString() !== currentPostId)
      .slice(0, 4);

    return { posts };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPostsByTagId(params: GetPostsByTagIdParams) {
  const { tagIds, currentPostId } = params;
  
  // Create cache key from tag IDs
  const tagKey = tagIds.map(String).sort().join("-");
  
  const getCachedRelatedPosts = unstable_cache(
    async () => getPostsByTagIdFromDB(tagIds, currentPostId!),
    [`related-posts-${tagKey}`],
    { revalidate: 60, tags: ["posts"] }
  );
  
  return getCachedRelatedPosts();
}
