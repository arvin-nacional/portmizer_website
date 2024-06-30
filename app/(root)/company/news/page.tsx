import LocalSearchbar from "@/components/search/LocalSearchBar";
import Pagination from "@/components/search/Pagination";
import CTA from "@/components/shared/CTA";
import BlogCard from "@/components/ui/blogCard";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { getPosts } from "@/lib/actions/post.action";
import { formatDate } from "@/lib/utils";
import { SearchParamsProps } from "@/types";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ searchParams }: SearchParamsProps) => {
  const result = await getPosts({
    searchQuery: searchParams.q,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <div>
      <Header title="News and Updates" img="/assets/images/about-image.jpg" />
      <section className="flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center ">
          <SignedIn>
            <Button className="px-7 py-6 mb-10 bg-primary-500 hover:bg-primary-300 transition-all duration-300 ease-in-out animate__fadeIn animate__delay-3s">
              <Link
                href="/company/news/add"
                className="base-medium flex gap-2 items-center"
              >
                <Image
                  src="/assets/icons/add.svg"
                  alt="arrow-right"
                  width={24}
                  height={24}
                />
                Add an article
              </Link>
            </Button>
          </SignedIn>

          <div className="w-[900px] max-lg:w-[100%]">
            <LocalSearchbar
              route="/company/news"
              iconPosition="left"
              imgSrc="/assets/icons/search.svg"
              placeholder="Search for articles"
              otherClasses=""
            />
          </div>

          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
            {result.posts.map((component) => (
              <BlogCard
                title={component.title}
                date={formatDate(component.createdAt)}
                image={component.image}
                link={component._id}
                key={component._id}
                content={component.content}
              />
            ))}
          </div>
          <Pagination
            pageNumber={searchParams?.page ? +searchParams.page : 1}
            isNext={result.isNext}
          />
        </div>
      </section>
      <CTA
        title="Want to know more about our products?"
        action="Ask for a free consult"
        link="/contact"
      />
    </div>
  );
};

export default page;
