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
              <h4 className="h2-bold">Performance Upgrade</h4>
              <div className="h-[7px] w-[120px] primary-gradient mt-3"></div>
              <p className="paragraph-regular mt-5">
                Our performance upgrade service is designed to enhance the
                efficiency and productivity of your port equipment. We offer a
                range of upgrade solutions tailored to improve the performance,
                reliability, and capabilities of your machinery.
              </p>
              <p className="paragraph-regular mt-5">
                Our experienced technicians will assess your current equipment
                and recommend upgrades that can include advanced components,
                improved software, and enhanced systems. These upgrades are
                aimed at boosting operational efficiency, increasing load
                capacities, and reducing energy consumption, ultimately leading
                to greater overall productivity.
              </p>
              <p className="paragraph-regular mt-5">
                By investing in performance upgrades, you can extend the
                lifespan of your equipment, reduce operational costs, and stay
                ahead of industry advancements. Trust our expertise to deliver
                customized upgrade solutions that will optimize your port
                equipment and enhance your competitive edge.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/images/services3.svg"
                width={0}
                height={0}
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
