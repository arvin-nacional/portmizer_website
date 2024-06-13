"use client";
import React from "react";

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
import { heroServices } from "@/constants";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-screen h-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="bg-[url('/assets/images/hero-img-1.svg')] bg-cover b-gcenter w-full flex justify-center items-center  max-sm:px-20 ">
              <Card className="w-[1200px] pb-6 max-md:mt-10 mt-10">
                <CardContent className="flex flex-col h-screen items-start justify-center gap-10 max-sm:gap-20">
                  <h1 className="text-5xl font-semibold text-light-900 max-sm:text-3xl">
                    Driving Excellence in Port and Container Handling since 1990
                  </h1>

                  <h2 className="base-medium md:w-1/2 text-light-900">
                    At Portmizer, we don't just provide equipment—we provide
                    peace of mind. Trust us to be your steadfast partner in
                    driving progress and achieving operational excellence in the
                    dynamic world of port and container handling.
                  </h2>
                  <Button className="px-8 py-7 rounded-3xl primary-gradient hover:primary-gradient2 transition-all duration-300 ease-in-out">
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
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[url('/assets/images/hero-img-2.svg')] bg-cover b-gcenter w-full flex justify-center items-center max-sm:px-20">
              <Card className="w-[1200px] pb-6 max-md:mt-10 mt-10">
                <CardContent className="flex flex-col h-screen items-start justify-center gap-10">
                  <h1 className="text-5xl font-semibold text-light-900 max-sm:text-3xl">
                    Portmizer Philippines Corporation: <br />
                    Advancing Shipping and Container Handling Excellence
                  </h1>

                  <h2 className="base-medium md:w-1/2 text-light-900">
                    For more than 34 years, Portmizer Philippines Corporation
                    has been synonymous with innovation and reliability in the
                    shipping, stevedoring, and container yard sectors.
                    Established in 1990, we offer a wide range of products,
                    including Kalmar Port and Terminal Systems, Mantsinen Mobile
                    Harbor Cranes, and Actiw Loadplate automated loading
                    equipment, all designed to enhance operational efficiency.
                  </h2>
                  <Button className="px-8 py-7 rounded-3xl primary-gradient hover:primary-gradient2 transition-all duration-300 ease-in-out">
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
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[url('/assets/images/hero-img-4.svg')] bg-cover b-gcenter w-full flex justify-center items-center max-sm:px-20">
              <Card className="w-[1200px] pb-6 max-md:mt-10 mt-10">
                <CardContent className="flex flex-col h-screen items-start justify-center gap-10">
                  <h1 className="text-5xl font-semibold text-light-900 max-sm:text-3xl">
                    Only the Best for the Customers
                  </h1>

                  <h2 className="base-medium md:w-1/2 text-light-900">
                    We pursue mutually-beneficial relationship with customers,
                    co-workers, shareholders and communities on a long-term
                    basis.
                  </h2>

                  <h2 className="base-bold text-light-900">Our Services</h2>
                  <div className="flex flex-col gap-3 text-light-900">
                    {heroServices.map((component) => (
                      <Link className="flex gap-3" href={component.link}>
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
                  <Button className="px-8 py-7 rounded-3xl primary-gradient hover:primary-gradient2 transition-all duration-300 ease-in-out">
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
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
