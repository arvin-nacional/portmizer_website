"use client";
import React from "react";
import "animate.css";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { heroServices, products } from "@/constants";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false })
  );
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden ">
      <Carousel
        plugins={[plugin.current]}
        className="w-screen h-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div
              className="w-full flex justify-center items-center  px-12 min-h-[600px] "
              style={{
                position: "relative",
              }}
            >
              <Image
                src="/assets/images/slider-2.jpg"
                alt="Cover Image"
                className="bg-img"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Card className="w-[1200px] pb-6 max-md:mt-10 mt-10">
                <CardContent className="flex flex-col h-screen items-start justify-center gap-10 max-sm:gap-20">
                  <h1 className="text-5xl font-semibold text-light-900 max-sm:text-2xl md:w-2/3">
                    Driving Excellence in Port and Container Handling since 1990
                  </h1>

                  <h2 className="base-medium md:w-1/2 text-light-900 max-sm:paragraph-regular">
                    At Portmizer, we don't just provide equipment—we provide
                    peace of mind. Trust us to be your steadfast partner in
                    driving progress and achieving operational excellence in the
                    dynamic world of port and container handling.
                  </h2>
                  <Link
                    href="/contact"
                    className="base-medium flex gap-2 items-center"
                  >
                    <Button className="px-7 py-6 bg-primary-500 hover:bg-primary-300 transition-all duration-300 ease-in-out animate__fadeIn animate__delay-3s">
                      <Image
                        src="/assets/icons/arrow-right-btn.svg"
                        alt="arrow-right"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      Ask a free consult
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          {/* <CarouselItem>
            <div className="bg-[url('/assets/images/hero-image-2.jpg')] bg-cover bg-center w-full flex justify-center items-center max-sm:px-12">
              <Card className="w-[1200px] pb-6 max-md:mt-10 mt-10">
                <CardContent className="flex flex-col h-screen items-start justify-center gap-10">
                  <h1 className="text-5xl font-semibold text-light-900 max-sm:text-2xl">
                    Portmizer Philippines Corporation: <br />
                    Advancing Shipping and Container Handling Excellence
                  </h1>

                  <h2 className="base-medium md:w-1/2 text-light-900 max-sm:paragraph-regular">
                    For more than 34 years, Portmizer Philippines Corporation
                    has been synonymous with innovation and reliability in the
                    shipping, stevedoring, and container yard sectors.
                  </h2>
                  <Button className="px-7 py-6 bg-primary-500 hover:bg-primary-300 transition-all duration-300 ease-in-out animate__fadeIn animate__delay-3s">
                    <Link
                      href="/contact"
                      className="base-medium flex gap-2 items-center"
                    >
                      <Image
                        src="/assets/icons/arrow-right-btn.svg"
                        alt="arrow-right"
                        width={24}
                        height={24}
                      />
                      Ask a free consult
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem> */}
          <CarouselItem>
            <div
              className="w-full flex justify-center items-center  px-12 min-h-[600px] "
              style={{
                position: "relative",
              }}
            >
              <Image
                src="/assets/images/hero-image-3.jpg"
                alt="Cover Image"
                className="bg-img"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Card className="w-[1200px] pb-6 max-md:mt-10 mt-10">
                <CardContent className="flex flex-col h-screen items-start justify-center gap-10">
                  <h1 className="text-5xl font-semibold text-light-900 max-sm:text-2xl">
                    Only the Best for Customers
                  </h1>

                  {/* <h2 className="base-medium md:w-1/2 text-light-900 max-sm:paragraph-regular">
                    We pursue mutually-beneficial relationship with customers,
                    co-workers, shareholders and communities on a long-term
                    basis.
                  </h2> */}

                  <h2 className="base-bold text-light-900">Our Services</h2>
                  <div className="flex flex-col gap-3 text-light-900">
                    {heroServices.map((component) => (
                      <Link
                        className="flex gap-3"
                        href={component.link}
                        key={component.title}
                      >
                        <Image
                          src="/assets/icons/chevron-right-white.svg"
                          alt="arrow-right"
                          width={24}
                          height={24}
                        />
                        <h3>{component.title}</h3>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="base-medium flex gap-2 items-center"
                  >
                    <Button className="px-7 py-6 bg-primary-500 hover:bg-primary-300 transition-all duration-300 ease-in-out animate__fadeIn animate__delay-3s">
                      <Image
                        src="/assets/icons/arrow-right-btn.svg"
                        alt="arrow-right"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      Ask a free consult
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div
              className="w-full flex justify-center items-center  px-12 min-h-[600px] "
              style={{
                position: "relative",
              }}
            >
              <Image
                src="/assets/images/slider-3.jpg"
                alt="Cover Image"
                className="bg-img"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Card className="w-[1200px] pb-6 max-md:mt-10 mt-10">
                <CardContent className="flex flex-col h-screen items-start justify-center gap-10">
                  <h1 className="text-5xl font-semibold text-light-900 max-sm:text-2xl">
                    Your safety is our priority
                  </h1>

                  {/* <h2 className="base-medium md:w-3/4 text-light-900">
                    At Portmizer Philippines Corporation, we are dedicated to
                    revolutionizing the shipping, stevedoring, and container
                    yard industries with our exceptional range of products.
                  </h2> */}

                  <h2 className="base-bold text-light-900">Our Products</h2>
                  <div className="flex flex-col gap-3 text-light-900">
                    {products.map((component) => (
                      <Link
                        className="flex gap-3"
                        href={component.link}
                        key={component.title}
                      >
                        <Image
                          src="/assets/icons/chevron-right-white.svg"
                          alt="arrow-right"
                          width={24}
                          height={24}
                        />
                        <h3>{component.title}</h3>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="base-medium flex gap-2 items-center"
                  >
                    <Button className="px-7 py-6 bg-primary-500 hover:bg-primary-300 transition-all duration-300 ease-in-out animate__fadeIn animate__delay-3s">
                      <Image
                        src="/assets/icons/arrow-right-btn.svg"
                        alt="arrow-right"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      Ask a free consult
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
