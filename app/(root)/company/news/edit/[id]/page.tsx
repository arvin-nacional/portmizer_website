import Post from "@/components/forms/Post";
import Header from "@/components/ui/header";
import { getPostById } from "@/lib/actions/post.action";
import { ParamsProps } from "@/types";
import React from "react";

const Page = async ({ params }: ParamsProps) => {
  const result = await getPostById({ postId: params.id });
  return (
    <div>
      <Header title="Edit Post" img="/assets/images/career-img.png" />
      <section className="background-light400_dark300 flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <h4 className="base-bold mb-10">Edit an Article</h4>
          <div className="w-[600px] max-sm:w-full">
            <Post
              type="Edit"
              postDetails={JSON.stringify(result?.post)}
              postId={params.id}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
