import HomeProducts from "@/components/HomeProducts";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Products" img="/assets/images/hero-image-2.jpg" />
      <HomeProducts />

      <CTA
        title="Want to know more about our products?"
        action="Ask for a free consult"
        link="/contact"
      />
    </div>
  );
};

export default page;
