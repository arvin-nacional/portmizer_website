import ProductsPage from "@/components/ProductsPage";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import ProductDetailsCard from "@/components/ui/productDetailsCard";
import {
  kalmarEmptyContainerHandler,
  tecContainerSpreaders,
} from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Tec Container" img="/assets/images/about-image.jpg" />

      <section className="flex items-center justify-center px-16 max-md:px-5 mb-10">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <ProductsPage
            title="Container Spreaders"
            caption="Our Container spreaders are engineered for efficient and reliable container handling. Designed to handle all types of containers with precision and safety, these spreaders enhance operational efficiency in ports, terminals, and logistics hubs. Built with durability in mind, they ensure smooth operations in both indoor and outdoor environments, making them a versatile choice for any container handling needs."
            logo="/assets/logo/tec-container.png"
          />
          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 mt-5">
            {tecContainerSpreaders.map((component) => (
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
