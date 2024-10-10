import ProductsPage from "@/components/ProductsPage";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import ProductCard from "@/components/ui/productCard";
import ProductDetailsCard from "@/components/ui/productDetailsCard";
import { dafoVehicleFireProtection, kalmarProductCard } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Products" img="/assets/images/hero-image-2.jpg" />
      <ProductsPage
        title="Dafo Vehicle Fire Protection"
        caption="Dafo offers a complete range of extinguishing systems for heavy vehicles, hips and buses. Fires in vehicles often take hold very quickly and are hard to extinguish with a handheld extinguisher. A correctly dimensioned extinguishing system offers you fast, effective protection that limits the consequences of a fire."
        logo="/assets/logo/dafo-new.png"
      />
      <section className="flex items-center justify-center px-16 max-md:px-5 mb-10">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 mt-5">
            {dafoVehicleFireProtection.map((component) => (
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
