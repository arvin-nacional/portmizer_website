import HomeServices from "@/components/HomeServices";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <Header title="Services" img="/assets/images/about-image.jpg" />
      <section className="flex items-center justify-center px-16  max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <HomeServices />
        </div>
      </section>
      <CTA
        title="Want to know more about our services?"
        action="Ask for a free consult"
        link="/contact"
      />
    </div>
  );
};

export default page;
