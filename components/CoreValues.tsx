import React from "react";
import CoreValueItem from "./ui/coreValueItem";
import { coreValues } from "@/constants";

const CoreValues = () => {
  return (
    <section className="background-light400_dark300 flex items-center justify-center px-16 py-20 max-sm:py-5 max-md:px-5 sm:px-14">
      <div className="w-[1200px] max-w-full grid grid-cols-4 pb-6 max-md:mt-10 gap-10 max-sm:grid-cols-2 align-top">
        {coreValues.map((component) => (
          <CoreValueItem
            image={component.image}
            title={component.title}
            caption={component.caption}
          />
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
