"use client";
import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  rating: string;
  text: string;
  designation: string;
}

const TestimonialCard = ({ image, name, designation, rating, text }: Props) => {
  const renderStars = () => {
    const numberOfStars = parseInt(rating, 10); // Convert the rating string to a number
    return Array.from({ length: numberOfStars }, (_, index) => (
      <Image
        key={index}
        className="relative size-6 min-h-[24px]"
        loading="lazy"
        alt="Star"
        width={24}
        height={24}
        src="/assets/icons/Star2.svg"
      />
    ));
  };
  return (
    <div
      className={`card-wrapper group m-2 box-border flex min-w-[277px] max-w-full flex-1 flex-col items-start justify-start gap-[26px] overflow-hidden rounded-xl py-[60px] pl-8 pr-[31px] text-left font-inter text-5xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] transition-all duration-500 group-hover:shadow-2xl`}
    >
      <div className="mq450:gap-[16px] flex flex-col items-start justify-start gap-[33px] self-stretch">
        <div className="mq925:flex-wrap flex flex-row items-start justify-start gap-[10.2px]">
          <Image
            className="relative size-16 object-cover"
            loading="lazy"
            alt=""
            width={25}
            height={25}
            src={image}
          />
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[8.5px]">
            <div className="relative">
              <p className="base-bold text-dark300_light700 [margin-block-end:4px] [margin-block-start:0]">
                {name}
              </p>
              <p className="paragraph-regular text-dark500_light700">
                {designation}
              </p>
            </div>
          </div>
        </div>
        <div className="text-dark300_light700 paragraph-regular flex flex-row items-start justify-start self-stretch py-0 pl-1 pr-0">
          <p className="relative m-0 flex-1 leading-[27px]">{text}</p>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start px-1 py-0">
        <div className="mq450:flex-wrap flex flex-row items-start justify-center gap-[4px]">
          {renderStars()}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
