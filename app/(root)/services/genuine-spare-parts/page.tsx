import ProductsPage from "@/components/ProductsPage";
import CTA from "@/components/shared/CTA";
import Header from "@/components/ui/header";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Header
        title="Engineering Services"
        img="/assets/images/about-image.jpg"
      />
      <section className="flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="flex gap-20 items-center max-md:flex-col">
            <div className="flex-1">
              <h4 className="h2-bold">Genuine Spare Parts</h4>
              <div className="h-[7px] w-[120px] primary-gradient mt-3"></div>
              <p className="paragraph-regular mt-5">
                We specialize in providing genuine spare parts for a wide range
                of port equipment, ensuring the highest levels of reliability
                and performance for your operations. Our commitment to quality
                means that we only supply authentic parts sourced directly from
                trusted manufacturers. This guarantees compatibility,
                durability, and optimal functioning of your machinery.
              </p>
              <p className="paragraph-regular mt-5">
                Our extensive inventory includes parts for cranes, forklifts,
                container handlers, and other essential port equipment, ensuring
                that you have quick access to the components you need. By
                choosing our service, you can minimize downtime and maintain the
                smooth operation of your port activities. Additionally, our
                knowledgeable team offers expert support to help you select the
                right parts and provide guidance on installation and
                maintenance.
              </p>
              <p className="paragraph-regular mt-5">
                Trust us to deliver the genuine spare parts you need to keep
                your port equipment running efficiently and effectively.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/images/services1-1.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "500px" }} // optional
                alt="genuine-parts-image"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <CTA
        title="Want to know more about our services?"
        action="Ask for a free consult"
        link="/contact"
      />
    </div>
  );
};

export default page;
