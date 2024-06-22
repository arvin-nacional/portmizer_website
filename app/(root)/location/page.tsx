import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import LocationCard from "@/components/ui/locationCard";
import { locations } from "@/constants";
import { cp } from "fs";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header title="Locations" img="/assets/images/about-image.jpg" />
      <section className="flex items-center justify-center px-16 max-md:px-5 mb-10">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 flex-col items-center gap-10">
          <div className="flex gap-20 items-center max-md:flex-col mt-10">
            <div className="flex-1">
              <h4 className="h2-bold">
                Where to find us and how to get in touch.
              </h4>
              <div className="h-[7px] w-[120px] primary-gradient mt-3"></div>
              <p className="paragraph-regular mt-5">
                Portmizer Philippines Corporation provides extensive service
                network across the Philippines, with dedicated locations in
                Manila, Cebu, Laguna, and Davao.
              </p>
              <p className="paragraph-regular mt-5">
                Each site is staffed with expert technicians ready to provide
                top-notch support, ensuring your equipment operates at peak
                performance. From genuine spare parts to comprehensive
                maintenance and upgrades, our strategically located service
                centers are equipped to meet all your needs swiftly and
                efficiently.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/images/location-image.svg"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }} // optional
                alt="home-about-image2"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="grid gap-5 grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 mt-10">
            {locations.map((component) => (
              <LocationCard
                location={component.location}
                key={component.location}
                address={component.address}
                number={component.number}
              />
            ))}
          </div>
        </div>
      </section>
      <CTA
        title="Want to know more about our products?"
        action="Ask for a free consult"
        link="/contact"
      />
    </div>
  );
};

export default Page;
