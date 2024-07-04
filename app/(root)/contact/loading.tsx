import Contact from "@/components/forms/Contact";
import Header from "@/components/ui/header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Contact" img="/assets/images/contact-img-2.jpg" />
      <section className="background-light400_dark300 flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="loader"></div>
        </div>
      </section>
    </div>
  );
};

export default page;
