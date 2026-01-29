import ProductsPage from "@/components/ProductsPage";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import ProductDetailsCard from "@/components/ui/productDetailsCard";
import {
  kalmarEmptyContainerHandler,
  tecContainerLashingCages,
  tecContainerOverheightFrame,
  tecContainerReachstackerAttachments,
  tecContainerSpreaders,
} from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Tec Container" img="/assets/images/about-image.jpg" />
      <ProductsPage
        title="Lashing Cages"
        caption="TEC Container provides a variety of lashing and personnel safety cages, encompassing options such as Gondola, Under Hook, and Under Spreader types. Our range ensures comprehensive safety and efficiency in handling operations, offering solutions tailored to meet specific industry needs and standards. Each cage is designed with robust construction and ergonomic features to enhance worker safety and facilitate secure lashing of cargo during transport and handling tasks. Explore our diverse offerings to find the ideal solution for your operational requirements."
        logo="/assets/logo/tec-container.png"
      />
      <section className="flex items-center justify-center px-16 max-md:px-5 mb-10">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 mt-5">
            {tecContainerLashingCages.map((component) => (
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
