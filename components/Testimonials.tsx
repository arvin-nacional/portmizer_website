"use client";
import React, { useState, useEffect } from "react";
import TestimonialCard from "./ui/testimonial-card";
import Image from "next/image";
import { testimonialData } from "@/constants";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
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
  //         prevIndex >= testimonialData.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, [currentIndex, testimonialData.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonialData.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="background-light400_dark300 flex items-center justify-center px-16 py-20 max-md:px-5 sm:px-14">
      <div className="w-[1200px] max-w-full justify-between pb-6 max-md:mt-10">
        <div className="justify-between mb-12 flex items-end px-3">
          <div>
            <h2 className="text-dark300_light700 max-sm:base-bold h2-bold font-bold leading-7 max-md:max-w-full">
              Testimonial
            </h2>
            <h1 className="text-dark500_light700 mt-5 max-sm:h3-bold  max-md:max-w-full max-md:text-4xl h1-bold">
              What our customer says about us
            </h1>
          </div>
          <div className="flex items-end justify-end">
            <div className="mt-12 flex flex-row justify-end gap-5">
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
                  opacity:
                    currentIndex === testimonialData.length - 1 ? 0.5 : 1,
                  pointerEvents:
                    currentIndex === testimonialData.length - 1
                      ? "none"
                      : "auto",
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
                (currentIndex / testimonialData.length) * 100
              }%)`,
              width: `${(testimonialData.length / itemsPerPage) * 100}%`,
            }}
          >
            {testimonialData.map((item, index) => (
              <div key={index} className="w-full px-2 md:w-1/2 lg:w-1/3">
                <TestimonialCard
                  image={item.testimonialThumb}
                  name={item.avatarName}
                  designation={item.avatarDesignation}
                  rating={item.ratings}
                  text={item.testimonialText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
