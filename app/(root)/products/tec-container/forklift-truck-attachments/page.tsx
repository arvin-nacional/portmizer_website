import ProductsPage from "@/components/ProductsPage";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import ProductDetailsCard from "@/components/ui/productDetailsCard";
import {
  kalmarEmptyContainerHandler,
  tecContainerForkliftTruckAttachments,
  tecContainerSpreaders,
} from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Tec Container" img="/assets/images/about-image.jpg" />
      <ProductsPage
        title="Forklift Truck Attachments"
        caption="Enhance the versatility of your forklift trucks with our innovative attachments. These attachments expand the capabilities of your forklifts, allowing them to handle a wider range of tasks with ease. Designed for durability and efficiency, they are perfect for improving the functionality and productivity of your forklift operations."
        logo="/assets/logo/tec-container.png"
      />
      <section className="flex items-center justify-center px-16 max-md:px-5 mb-10">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 mt-5">
            {tecContainerForkliftTruckAttachments.map((component) => (
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
