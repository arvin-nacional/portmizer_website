import { productsCard } from "@/constants";
import React from "react";
import ProductCard from "./ui/productCard";

const HomeProducts = () => {
  return (
    <section className="background-light400_dark300 flex items-center justify-center px-16 py-20 max-sm:py-5 max-md:px-5 sm:px-14">
      <div className="w-[1200px] max-w-full pb-6 max-md:mt-10 gap-10  align-top ">
        <div>
          <h3 className="h2-bold text-dark-500 mb-2">Our Products</h3>
          <div className="h-[7px] w-[130px] primary-gradient"></div>
          <p className="w-1/2 mt-5 max-sm:w-full">
            We provide top-tier machinery services for a range of
            high-performance equipment, ensuring optimal operation and safety in
            your port operations. Our expertise covers:
          </p>
          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1">
            {productsCard.map((component) => (
              <ProductCard
                title={component.title}
                image={component.image}
                link={component.link}
                caption={component.caption}
                key={component.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
