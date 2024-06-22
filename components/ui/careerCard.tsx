import { CareerOpeningsProps } from "@/types";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

const CareerCard = ({ title, caption }: CareerOpeningsProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-10  rounded-3xl h-[100%] gap-5 text-center shadow-xl">
      <p className="base-bold">{title}</p>
      <p className="body-regular">{caption}</p>
      <Link href="/career-form">
        <Button
          className="text-primary-500 border-primary-500 hover:outline-none hover:text-white hover:bg-primary-500"
          variant="outline"
        >
          Apply Now
        </Button>
      </Link>
    </div>
  );
};

export default CareerCard;
