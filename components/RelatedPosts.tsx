import { ITag } from "@/database/tag.model";
import { getRelatedPosts } from "@/lib/actions/post.action";
import { getPostsByTagId } from "@/lib/actions/tag.actions";
import { formatDate } from "@/lib/utils";
import { RelatedPostsProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedPosts = async ({ currentPostId, tagIds }: RelatedPostsProps) => {
  const result = await getPostsByTagId({ tagIds, currentPostId });

  return (
    <div>
      <p className="base-bold mb-5">Related Posts</p>
      <div className="flex flex-col gap-3">
        {result?.posts.map((item: any) => (
          <Link href={`/company/news/${item._id}`} key={item.title}>
            <div className="flex gap-5 max-sm:flex-row max-xl:flex-col">
              <div className="relative w-[67px] h-[60px] flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="67px"
                  className="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-center group w-[250px]">
                <p className="paragraph-semibold truncate group-hover:text-primary-500">
                  {item.title}
                </p>
                <p className="body-regular group-hover:text-primary-500">
                  {formatDate(item.createdAt)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
