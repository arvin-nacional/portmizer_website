import HomeServices from "@/components/HomeServices";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Services" img="/assets/images/hero-image-2.jpg" />
      <HomeServices />

      <CTA
        title="Want to know more about our services?"
        action="Ask for a free consult"
        link="/contact"
      />
    </div>
  );
};

export default page;
