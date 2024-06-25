"use server";

import {
  GetPostsParams,
  TagWithPosts,
  addPostParams,
  getPostByIdParams,
} from "./shared.types";
import { connectToDatabase } from "../mongoose";
import Post, { IPost } from "@/database/post.model";

import { revalidatePath } from "next/cache";
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
  } catch (error) {
    console.log(error);
  }
}

export async function getPosts(params: GetPostsParams) {
  try {
    connectToDatabase();
    const { searchQuery, filter, page = 1, pageSize = 9 } = params;

    // Calculcate the number of posts to skip based on the page number and page size
    const skipAmount = (page - 1) * pageSize;

    const query: FilterQuery<typeof Post> = {};

    console.log(searchQuery);

    if (searchQuery) {
      query.$or = [
        { title: { $regex: new RegExp(searchQuery, "i") } },
        { content: { $regex: new RegExp(searchQuery, "i") } },
      ];
    }

    const posts = await Post.find(query)
      .populate({ path: "tags", model: Tag })
      .skip(skipAmount)
      .limit(pageSize);

    const totalPosts = await Post.countDocuments(query);

    const isNext = totalPosts > skipAmount + posts.length;

    return { posts, isNext };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPostById(params: getPostByIdParams) {
  try {
    connectToDatabase();
    const { postId } = params;
    const post = await Post.findById(postId).populate({
      path: "tags",
      model: Tag,
    });

    return { post };
  } catch (error) {
    console.log(error);
  }
}

export async function getRecentPosts(params: GetPostsParams) {
  try {
    connectToDatabase();
    const { searchQuery, filter } = params;

    const query: FilterQuery<typeof Post> = {};

    if (searchQuery) {
      query.$or = [
        { title: { $regex: new RegExp(searchQuery, "i") } },
        { content: { $regex: new RegExp(searchQuery, "i") } },
      ];
    }

    const posts = await Post.find(query)
      .populate({ path: "tags", model: Tag })
      .sort({ createdAt: -1 }) // Sort by creation date in descending order
      .limit(4); // Limit to 4 posts

    return { posts };
  } catch (error) {
    console.log(error);
    throw error;
  }
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
