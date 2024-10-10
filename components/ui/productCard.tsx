import { ProductCardProps } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ image, title, caption, link }: ProductCardProps) => {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center justify-start px-10 py-[21px] text-center hover:shadow-xl transition-shadow duration-300 h-[100%] rounded-3xl">
        <Image
          src={image}
          alt="Product Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            objectPosition: "center top",
          }}
          className="rounded-2xl bg-cover"
        />
        <p className="base-bold mt-10">{title}</p>
        <p className="mt-10 body-regular">{caption}</p>
        {/* <div className="flex mt-5 items-center">
          <p className=" text-primary-500">See more</p>
          <ChevronRight className="h-4 text-primary-500" />
        </div> */}
      </div>
    </Link>
  );
};

export default ProductCard;
