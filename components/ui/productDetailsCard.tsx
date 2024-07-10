import { ProductCardProps, ProductDetailsProps } from "@/types";
import Image from "next/image";
import React from "react";

const ProductDetailsCard = ({ image, title, caption }: ProductDetailsProps) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-start px-10 py-[21px] text-center hover:shadow-xl transition-shadow duration-300 h-[100%] rounded-3xl max-sm:shadow-xl">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
          className="rounded-2xl bg-cover"
        />
        <p className="base-bold mt-10">{title}</p>
        <p className="mt-10 body-regular">{caption}</p>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
