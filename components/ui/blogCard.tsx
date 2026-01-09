import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import DeletePost from "../DeletePost";
import { SignedIn } from "@clerk/nextjs";

function stripHtmlAndTruncate(html: string, maxLength: number = 150): string {
  const text = html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

interface Props {
  title: string;
  image: string;
  date: string;
  link: string;
  content: string;
}

const BlogCard = ({ title, image, date, link, content }: Props) => {
  return (
    <div className="flex flex-col rounded-xl w-[300px] p-5 hover:shadow-lg">
      <Link href={`/company/news/${link}`}>
        <div className="relative cursor-pointer h-[200px] rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="300px"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </Link>
      <Link href={`/company/news/${link}`}>
        {" "}
        <h2 className="base-bold mt-5">{title}</h2>
      </Link>

      <h2 className="small-regular mb-2">{date}</h2>
      <p className="body-regular line-clamp-4 text-gray-600">
        {stripHtmlAndTruncate(content)}
      </p>
      {/* <p className="body-regular line-clamp-4 mt-5">{content}</p> */}
      <div className="flex justify-between items-center mt-5 ">
        <Link href={`/company/news/${link}`}>
          <div className="flex items-center">
            <p className=" text-primary-500">Read more</p>
            <ChevronRight className="h-4 text-primary-500" />
          </div>
        </Link>
        <SignedIn>
          <div className="flex gap-5 items-center">
            <Link href={`/company/news/edit/${link}`}>
              <Image
                src="/assets/icons/edit.svg"
                alt="edit"
                height={20}
                width={20}
                className="hover:text-primary-500"
              />
            </Link>
            <DeletePost postId={link} />
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default BlogCard;
