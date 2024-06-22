import { HiringProcessProps } from "@/types";
import Image from "next/image";
import React from "react";

const HiringProcessCard = ({ title, caption, image }: HiringProcessProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-10  rounded-3xl h-[100%] gap-5 text-center shadow-xl">
      <Image src={image} alt="hiring-step-image" height={50} width={50} />
      <p className="base-bold">{title}</p>
      <p className="body-regular">{caption}</p>
    </div>
  );
};

export default HiringProcessCard;
