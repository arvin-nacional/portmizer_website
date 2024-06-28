import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <section className="flex items-center justify-center px-16 py-20 max-sm:py-5 max-md:px-5 sm:px-14 bg-gray-100">
      <div className="w-[1200px] max-w-full grid grid-cols-3 pb-6 max-md:mt-10 gap-10 max-sm:grid-cols-1 align-top px-2">
        <div>
          <h3 className="h2-bold text-dark-500 mb-2">About Us</h3>
          <div className="h-[7px] w-[120px] primary-gradient"></div>
          <p className="paragraph-regular mt-5 ">
            Established since 1990, Portmizer Philippines Corporation shifted
            its focus to catering the needs of the shipping, stevedoring and
            container yard operators when the demand for a more efficient and
            reliable container and bulk handling equipment became apparent.
          </p>
          <Image
            src="/assets/images/home-about-image1.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="home-about-image"
            className="mt-5 rounded-2xl"
          />
        </div>
        <div>
          <Image
            src="/assets/images/home-about-image2.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="home-about-image2"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="paragraph-regular mt-5 ">
            Over our 34-year journey, we've consistently delivered genuine spare
            parts and top-notch crane services. Upholding the highest standards
            for every customer, our operations span across Service Stations
            worldwide, catering to a growing network of crane owners, managers,
            and operators.
          </p>
          <Button className="px-7 py-6 bg-primary-500 hover:bg-primary-300 transition-all duration-300 ease-in-out mt-10">
            <Link href="/about" className="base-medium flex gap-2 items-center">
              <Image
                src="/assets/icons/arrow-right-btn.svg"
                alt="arrow-right"
                width={24}
                height={24}
              />
              Find Out More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
