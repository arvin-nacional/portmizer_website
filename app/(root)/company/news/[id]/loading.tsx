import Header from "@/components/ui/header";
import React from "react";

const loading = () => {
  return (
    <div>
      <Header title="Articles" img="/assets/images/hero-image-2.jpg" />
      <section className="flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center ">
          <div className="loader"></div>
        </div>
      </section>
    </div>
  );
};

export default loading;
