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
              <h4 className="h2-bold">Conversions/Overhauling</h4>
              <div className="h-[7px] w-[120px] primary-gradient mt-3"></div>
              <p className="paragraph-regular mt-5">
                Our conversions and overhauling service is dedicated to
                revitalizing and adapting your port equipment to meet evolving
                operational needs. Whether you require a complete overhaul or
                specific modifications, we offer comprehensive solutions
                tailored to enhance performance, efficiency, and safety.
              </p>
              <p className="paragraph-regular mt-5">
                Our team of skilled engineers and technicians will work closely
                with you to assess your equipment and develop a customized plan
                for conversion or overhaul. This may include upgrading outdated
                components, retrofitting advanced technologies, or reconfiguring
                machinery for new applications.
              </p>
              <p className="paragraph-regular mt-5">
                Through meticulous planning and execution, we ensure minimal
                downtime and maximum return on investment. Our goal is to
                breathe new life into your port equipment, extending its service
                life, improving reliability, and optimizing functionality to
                meet the demands of modern port operations.
              </p>
              <p className="paragraph-regular mt-5">
                Trust us to deliver high-quality conversions and overhauling
                solutions that will transform your port equipment and enhance
                operational excellence.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/images/services4-1.jpg"
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
