import ProductsPage from "@/components/ProductsPage";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import ProductCard from "@/components/ui/productCard";
import { kalmarProductCard, tecContainerProductCard } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Kalmar" img="/assets/images/about-image.jpg" />
      <ProductsPage
        title="Tec Container"
        caption="A market leader in the design and production of container unloading, container handling and general cargo equipment in terminals and ports."
        logo="/assets/logo/tec-container.png"
      />
      <section className="flex items-center justify-center px-16 max-md:px-5 mb-10">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 mt-5">
            {tecContainerProductCard.map((component) => (
              <ProductCard
                title={component.title}
                image={component.image}
                link={component.link}
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
