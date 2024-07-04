"use client";
import React, { useState, useEffect } from "react";
import TestimonialCard from "./ui/testimonial-card";
import Image from "next/image";
import { clientLogo, partnerLogo } from "@/constants";

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(2);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  //   move every 2 seconds
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) =>
  //         prevIndex >= partnerLogo.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, [currentIndex, partnerLogo.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partnerLogo.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= partnerLogo.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-100 flex items-center justify-center px-16 py-20 max-md:px-5 sm:px-14 max-sm:py-10">
      <div className="w-[1200px] max-w-full justify-between max-md:mt-10">
        <div className="justify-between mb-12 flex items-end px-3">
          <div>
            <h3 className="h2-bold text-dark-500 mb-2 max-sm:base-bold">
              Our Partners
            </h3>
            <div className="h-[7px] w-[120px] primary-gradient"></div>
            <h1 className="text-dark500_light700 mt-5 max-sm:h3-bold  max-md:max-w-full max-md:text-4xl h1-bold">
              Trusted by Leading Industry Partners
            </h1>
          </div>
          <div className="flex items-end justify-end">
            <div className="mt-12 flex flex-row justify-end gap-5 xl:hidden">
              <div
                className="arrow-circle size-12 max-sm:size-8 cursor-pointer"
                onClick={handlePrev}
                style={{
                  opacity: currentIndex === 0 ? 0.5 : 1,
                  pointerEvents: currentIndex === 0 ? "none" : "auto",
                }}
              >
                <svg
                  className="arrow-icon size-8 max-sm:size-6 text-primary-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 12H5M12 19l-7-7 7-7"
                  ></path>
                </svg>
              </div>
              <div
                className="arrow-circle size-12 max-sm:size-8 cursor-pointer"
                style={{
                  opacity: currentIndex === partnerLogo.length - 1 ? 0.5 : 1,
                  pointerEvents:
                    currentIndex === partnerLogo.length - 1 ? "none" : "auto",
                }}
                onClick={handleNext}
              >
                <svg
                  className="arrow-icon size-8 max-sm:size-6 text-primary-300"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                (currentIndex / partnerLogo.length) * 100
              }%)`,
              width: `${(partnerLogo.length / itemsPerPage) * 100}%`,
            }}
          >
            {partnerLogo.map((item, index) => (
              <div key={index} className="w-full px-2 md:w-1/2 lg:w-1/3 mr-5">
                {/* <TestimonialCard
                  image={item.testimonialThumb}
                  name={item.avatarName}
                  designation={item.avatarDesignation}
                  rating={item.ratings}
                  text={item.testimonialText}
                /> */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={100}
                  className="hover:shadow-lg m-5 rounded-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
