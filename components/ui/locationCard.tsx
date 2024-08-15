import { LocationProps } from "@/types";
import image from "next/image";
import { title } from "process";
import React from "react";

const LocationCard = ({ location, address, number }: LocationProps) => {
  return (
    <div className="flex flex-col  px-10 py-10  rounded-3xl h-[100%]  max-sm: shadow-xl hover:shadow-xl group  transition-all duration-300">
      <p className="h2-bold mb-2">{location}</p>
      <div className="h-[7px] w-[0px] max-sm:w-[120px] group-hover:w-[120px] primary-gradient transition-all duration-300 "></div>
      {address && (
        <div>
          <p className="h3-semibold text-dark-500 mt-10 mb-2">Visit Us</p>
          <p className="paragraph-regular">{address}</p>
        </div>
      )}

      <p className="h3-semibold text-gray-700 mt-10">Contact Us</p>
      <p>Tel # {number}</p>
    </div>
  );
};

export default LocationCard;
