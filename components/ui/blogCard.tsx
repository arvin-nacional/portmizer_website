import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ParseHTML from "../shared/ParseHTML";

interface Props {
  title: string;
  image: string;
  date: string;
  link: string;
  content: string;
}

const BlogCard = ({ title, image, date, link, content }: Props) => {
  return (
    <Link href={`/company/news/${link}`}>
      <div className="flex flex-col rounded-xl w-[300px] p-5 hover:shadow-lg">
        <div
          className="cursor-pointer bg-cover bg-center h-[200px] rounded-xl"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <h2 className="base-bold mt-5">{title}</h2>
        <h2 className="small-regular mb-2">{date}</h2>
        <ParseHTML data={content} styles="line-clamp-4" />
        {/* <p className="body-regular line-clamp-4 mt-5">{content}</p> */}
        <div className="flex mt-5 items-center">
          <p className=" text-primary-500">Read more</p>
          <ChevronRight className="h-4 text-primary-500" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
