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
              <h4 className="h2-bold">Preventive Maintenance</h4>
              <div className="h-[7px] w-[120px] primary-gradient mt-3"></div>
              <p className="paragraph-regular mt-5">
                Our preventive maintenance service is designed to keep your port
                equipment operating at peak performance and reduce the risk of
                unexpected breakdowns. Regular maintenance checks and servicing
                ensure that your machinery remains in excellent condition,
                enhancing reliability and extending its lifespan.
              </p>
              <p className="paragraph-regular mt-5">
                Our skilled technicians conduct thorough inspections, routine
                servicing, and timely replacements of wear-and-tear components.
                This proactive approach helps to identify potential issues
                before they become costly problems, minimizing downtime and
                maximizing efficiency.
              </p>
              <p className="paragraph-regular mt-5">
                We tailor our maintenance schedules to suit your operational
                needs, ensuring minimal disruption to your activities. With our
                preventive maintenance service, you can trust that your port
                equipment will remain safe, efficient, and ready to handle the
                demands of your operations.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/images/preventive-maintenance.svg"
                width={0}
                height={0}
                style={{ width: "100%", height: "500px", objectFit: "contain" }} // optional
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
