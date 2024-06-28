import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  caption: string;
  logo: string;
}

const ProductsPage = ({ title, caption, logo }: Props) => {
  return (
    <section className="flex items-center justify-center px-16 sm:mt-20 xl:mb-10 max-md:px-5">
      <div className="w-[1200px] max-w-full flex justify-center xl:pb-6 max-md:mt-10 flex-col items-center">
        <div className="flex sm:gap-20 items-center max-md:flex-col">
          <div className="flex-1">
            <h4 className="h2-bold">{title}</h4>
            <div className="h-[7px] w-[120px] primary-gradient mt-3"></div>
            <p className="paragraph-regular mt-5">{caption}</p>
          </div>
          <div className="max-md:mt-10">
            <Image src={logo} alt={title} height={144} width={260} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
