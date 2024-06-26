import ProductsPage from "@/components/ProductsPage";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import ProductDetailsCard from "@/components/ui/productDetailsCard";
import { kalmarForkliftTrucks, kalmarTrailerTractor } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Kalmar" img="/assets/images/about-image.jpg" />

      <section className="flex items-center justify-center px-16 max-md:px-5 mb-10">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <ProductsPage
            title="Kalmar Insight"
            caption="Kalmar Insight is an easy to use performance management tool for material handling operations that gives you an easy to use overview of your fleet operations, by aggregating data from multiple sources. Enabling you to act on real-time information, that will help improve your overall operations immediately. Kalmar Insight will digitise your entire fleet, including equipment built by other manufacturers."
            logo="/assets/logo/kalmar.png"
          />
          {/* <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 mt-5">
            {kalmarTrailerTractor.map((component) => (
              <ProductDetailsCard
                title={component.title}
                image={component.image}
                caption={component.caption}
                key={component.title}
              />
            ))}
          </div> */}
        </div>{" "}
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
