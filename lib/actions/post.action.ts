"use server";

import { GetPostsParams, addPostParams } from "./shared.types";
import { connectToDatabase } from "../mongoose";
import Post from "@/database/post.model";

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
    const { searchQuery, filter, page = 1, pageSize = 10 } = params;

    // Calculcate the number of posts to skip based on the page number and page size
    const skipAmount = (page - 1) * pageSize;

    const query: FilterQuery<typeof Post> = {};

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

    return { posts };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
