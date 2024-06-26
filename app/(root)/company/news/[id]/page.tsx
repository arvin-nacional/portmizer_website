import RecentPosts from "@/components/RecentPosts";
import RelatedPosts from "@/components/RelatedPosts";
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
      <Header title="Articles" img="/assets/images/about-image.jpg" />
      <section className="flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <div
                className="relative w-[800px] h-[400px] bg-center object-cover flex flex-col text-white justify-end p-12 rounded-2xl mb-10"
                style={{
                  backgroundImage: `url(${details.image})`,
                }}
              >
                <div className="absolute inset-x-0 rounded-xl transition-opacity duration-300 bg-gradient-to-t from-black to-transparent h-[30%] bottom-0"></div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white  transition-opacity duration-300 ">
                  <div>
                    <p> {formatDate(details.createdAt)}</p>
                    <h3 className="h2-bold">{details.title}</h3>
                  </div>
                </div>
              </div>

              <ParseHTML data={details.content} />
              {/* <p className="paragraph-regular mt-10">{details.content}</p> */}
            </div>
            <div className="col-span-1 flex flex-col gap-10">
              <RecentPosts />
              <RelatedPosts currentPostId={params.id} tagIds={tagArr} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
