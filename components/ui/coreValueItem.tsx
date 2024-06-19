import { coreValuesProps } from "@/types";
import Image from "next/image";
import React from "react";

const CoreValueItem = ({ image, title, caption }: coreValuesProps) => {
  return (
    <div className="flex flex-col gap-5  items-center">
      <Image src={image} alt="core value image" height={73} width={73} />
      <div className="flex flex-col gap-2 text-center">
        <p className="h2-bold max-sm:base-bold">{title}</p>
        <p className="paragraph-regular max-sm:small-regular">{caption}</p>
      </div>
    </div>
  );
};

export default CoreValueItem;
