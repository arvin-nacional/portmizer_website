import ProductsPage from "@/components/ProductsPage";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import ProductDetailsCard from "@/components/ui/productDetailsCard";
import { tecContainerSpreaderBeams } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="Tec Container" img="/assets/images/about-image.jpg" />

      <section className="flex items-center justify-center px-16 max-md:px-5 mb-10">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <ProductsPage
            title="Spreader Beams / Lifting Beams"
            caption="Looking for spreader beams tailored to your lifting needs? Look no further. Our heavy-duty lifting beams are designed to handle a wide range of cargo types, ensuring compliance with international safety standards. With extensive customization options available, you can find the perfect beam to match your specific requirements. Explore our diverse range of options today."
            logo="/assets/logo/tec-container.png"
          />
          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 mt-5">
            {tecContainerSpreaderBeams.map((component) => (
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
