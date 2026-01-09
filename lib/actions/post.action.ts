"use server";

import {
  DeletePostParams,
  EditPostParams,
  GetPostsParams,
  GetRecentPostParams,
  TagWithPosts,
  addPostParams,
  getPostByIdParams,
} from "./shared.types";
import { connectToDatabase } from "../mongoose";
import Post, { IPost } from "@/database/post.model";

import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import Tag from "@/database/tag.model";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
import { FilterQuery } from "mongoose";

export async function createPost(params: addPostParams) {
  try {
    connectToDatabase();

    const { title, content, tags, image, path } = params;

    // Upload the member photo to Cloudinary
    const photoUploadResult = await cloudinary.uploader.upload(image, {
      // Additional Cloudinary options if needed
    });

    // Create the question
    const post = await Post.create({
      title,
      content,
      image: photoUploadResult.url, // Use the Cloudinary URL
    });

    const tagDocuments = [];

    // Create the tags or get them if they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { posts: post._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    await Post.findByIdAndUpdate(post._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // // Create an interaction record for the user's ask_question action
    // await Interaction.create({
    //   user: author,
    //   action: "ask_question",
    //   question: question._id,
    //   tags: tagDocuments,
    // });

    // // Increment author's reputation by +5 for creating a question
    // await User.findByIdAndUpdate(author, { $inc: { reputation: 5 } });

    revalidatePath(path);
    revalidateTag("posts");
  } catch (error) {
    console.log(error);
  }
}

async function getPostsFromDB(params: GetPostsParams) {
  try {
    await connectToDatabase();
    const { searchQuery, page = 1, pageSize = 6 } = params;

    const skipAmount = (page - 1) * pageSize;

    const query: FilterQuery<typeof Post> = {};

    if (searchQuery) {
      query.$or = [
        { title: { $regex: new RegExp(searchQuery, "i") } },
        { content: { $regex: new RegExp(searchQuery, "i") } },
      ];
    }

    // Run both queries in parallel for better performance
    const [posts, totalPosts] = await Promise.all([
      Post.find(query)
        .select("title content image createdAt tags")
        .populate({ path: "tags", model: Tag, select: "name" })
        .skip(skipAmount)
        .sort({ createdAt: -1 })
        .limit(pageSize)
        .lean(),
      Post.countDocuments(query),
    ]);

    const isNext = totalPosts > skipAmount + posts.length;

    return { posts, isNext };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPosts(params: GetPostsParams) {
  const { searchQuery, page = 1, pageSize = 6 } = params;
  
  // Use cached version for non-search queries
  if (!searchQuery) {
    const getCachedPosts = unstable_cache(
      async () => getPostsFromDB({ page, pageSize }),
      [`posts-page-${page}`],
      { revalidate: 60, tags: ["posts"] }
    );
    return getCachedPosts();
  }
  
  return getPostsFromDB(params);
}

async function getPostByIdFromDB(postId: string) {
  try {
    await connectToDatabase();
    const post = await Post.findById(postId)
      .populate({ path: "tags", model: Tag, select: "_id name posts" })
      .lean();

    return { post };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPostById(params: getPostByIdParams) {
  const { postId } = params;
  
  const getCachedPost = unstable_cache(
    async () => getPostByIdFromDB(postId),
    [`post-${postId}`],
    { revalidate: 60, tags: ["posts", `post-${postId}`] }
  );
  
  return getCachedPost();
}

async function getRecentPostsFromDB(postId: string) {
  try {
    await connectToDatabase();

    // Get 5 recent posts excluding current, in one query
    const posts = await Post.find({ _id: { $ne: postId } })
      .select("title image createdAt")
      .sort({ createdAt: -1 })
      .limit(4)
      .lean();

    return { posts };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getRecentPosts(params: GetRecentPostParams) {
  const { postId } = params;
  
  const getCachedRecentPosts = unstable_cache(
    async () => getRecentPostsFromDB(postId!),
    ["recent-posts"],
    { revalidate: 60, tags: ["posts"] }
  );
  
  return getCachedRecentPosts();
}

export async function getRelatedPosts(
  tags: TagWithPosts[],
  currentId: string,
  limit = 4
) {
  try {
    connectToDatabase();

    // Extract unique post IDs from tags array
    const postIds: Object[] = [];
    tags.forEach((tag) => {
      tag.posts.forEach((postId) => {
        if (!postIds.includes(postId)) {
          postIds.push(postId);
        }
      });
    });

    // Query related posts
    let query: any = {
      tags: { $in: postIds },
    };

    // Exclude current post if provided
    if (currentId) {
      query["_id"] = { $ne: new Object(currentId) };
    }

    console.log(postIds);
    const relatedPosts: IPost[] = await Post.find(query).limit(limit);

    return { relatedPosts };
  } catch (error) {
    console.error("Error fetching related posts:", error);
    throw error;
  }
}

export async function editPost(params: EditPostParams) {
  try {
    connectToDatabase();

    const { postId, title, content, path, image } = params;
    const post = await Post.findById(postId).populate("tags");

    if (!post) {
      throw new Error("Post not found");
    }

    post.title = title;
    post.image = image;
    post.content = content;

    await post.save();

    revalidatePath(path);
    revalidateTag("posts");
  } catch (error) {
    console.log(error);
  }
}

export async function deletePost(params: DeletePostParams) {
  try {
    connectToDatabase();

    const { postId, path } = params;
    await Post.deleteOne({ _id: postId });
    await Tag.updateMany({ posts: postId }, { $pull: { posts: postId } });

    revalidatePath(path);
    revalidateTag("posts");
  } catch (error) {
    console.log(error);
  }
}
