import ProductsPage from "@/components/ProductsPage";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import ProductDetailsCard from "@/components/ui/productDetailsCard";
import { kalmarEmptyContainerHandler } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Kalmar" img="/assets/images/about-image.jpg" />

      <section className="flex items-center justify-center px-16 max-md:px-5 mb-10">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <ProductsPage
            title="Empty Container Handler"
            caption="Kalmar has a range of empty container handlers designed to enhance the efficiency of your container handling operations. Our customizable solutions offer single container stackers with lifting capacities ranging from 8 to 11 tonnes, various stacking heights from 4 to 8 high, and double container stackers with 10 to 11 tonnes lifting capacities. Choose from a wide selection of drive lines and performance levels to meet your unique container handling needs."
            logo="/assets/logo/kalmar.png"
          />
          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 mt-5">
            {kalmarEmptyContainerHandler.map((component) => (
              <ProductDetailsCard
                title={component.title}
                image={component.image}
                caption={component.caption}
                key={component.title}
              />
            ))}
          </div>
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
