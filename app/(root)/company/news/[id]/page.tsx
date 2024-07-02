import RecentPosts from "@/components/RecentPosts";
import RelatedPosts from "@/components/RelatedPosts";
import CTA from "@/components/shared/CTA";
import ParseHTML from "@/components/shared/ParseHTML";
import Header from "@/components/ui/header";
import { IPost } from "@/database/post.model";
import { getPostById } from "@/lib/actions/post.action";
import { formatDate } from "@/lib/utils";
import { ParamsProps } from "@/types";
import React from "react";

const page = async ({ params }: ParamsProps) => {
  const result = await getPostById({ postId: params.id });

  const details = result?.post;

  const tagArr: Object[] = details.tags.map((item: { _id: any }) => item._id);

  return (
    <div>
      <Header title="Articles" img="/assets/images/hero-image-2.jpg" />
      <section className="flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
            <div className="col-span-2 max-md:cols-span-1">
              <div
                className="relative w-full bg-center object-cover flex flex-col text-white justify-end p-12 rounded-2xl mb-10 min-h-[400px]"
                style={{
                  backgroundImage: `url(${details.image})`,
                }}
              >
                <div className="absolute inset-x-0 rounded-xl transition-opacity duration-300 bg-gradient-to-t from-black to-transparent h-[30%] bottom-0"></div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white  transition-opacity duration-300 ">
                  <div>
                    <p> {formatDate(details.createdAt)}</p>
                    <h3 className="h2-bold max-sm:base-bold">
                      {details.title}
                    </h3>
                  </div>
                </div>
              </div>

              <ParseHTML data={details.content} />
              {/* <p className="paragraph-regular mt-10">{details.content}</p> */}
            </div>
            <div className="col-span-1 flex flex-col gap-10 max-md:col-span-1">
              <RecentPosts postId={params.id} />
              <RelatedPosts currentPostId={params.id} tagIds={tagArr} />
            </div>
          </div>
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
