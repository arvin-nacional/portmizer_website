import { getRecentPosts } from "@/lib/actions/post.action";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  postId: string;
}

const RecentPosts = async ({ postId }: Props) => {
  const result = await getRecentPosts({ postId });
  return (
    <div>
      <p className="base-bold mb-5">Recent Posts</p>
      <div className="flex flex-col gap-3">
        {result?.posts.map((item: any) => (
          <Link href={`/company/news/${item._id}`} key={item.title}>
            <div className="flex gap-5 max-xl:flex-col max-md:flex-row">
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

export default RecentPosts;
