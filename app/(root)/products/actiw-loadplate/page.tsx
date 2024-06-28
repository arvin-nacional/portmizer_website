import ProductsPage from "@/components/ProductsPage";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import ProductCard from "@/components/ui/productCard";
import ProductDetailsCard from "@/components/ui/productDetailsCard";
import {
  actiwProducts,
  dafoVehicleFireProtection,
  kalmarProductCard,
} from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Products" img="/assets/images/about-image.jpg" />
      <ProductsPage
        title="Actiw Loadplate"
        caption="Actiw LoadPlate is a fast and proven, one shot container loading solution for regular, non-modified cargo space. Stop losing money. Get payback on loading containers with LoadPlate.
LoadPlate is an easy and cost-effective loading solution for improving the efficiency, safety and damage free performance of container loading operations in wide variety of industries. Contact us to discuss how LoadPlate can be implemented to your operations!"
        logo="/assets/logo/actiw.png"
      />
      <section className="flex items-center justify-center px-16 max-md:px-5 mb-10">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 mt-5">
            {actiwProducts.map((component) => (
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
