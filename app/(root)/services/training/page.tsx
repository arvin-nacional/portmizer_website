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
              <h4 className="h2-bold">Maintenance and Operators Training</h4>
              <div className="h-[7px] w-[120px] primary-gradient mt-3"></div>
              <p className="paragraph-regular mt-5">
                Our comprehensive training programs are designed to equip your
                personnel with the knowledge and skills needed to operate port
                equipment safely, efficiently, and effectively. We offer a range
                of training modules tailored to various roles and equipment
                types, ensuring that your team is fully prepared to handle the
                demands of port operations.
              </p>
              <p className="paragraph-regular mt-5">
                Our experienced instructors provide hands-on training sessions
                that cover equipment operation, maintenance procedures, safety
                protocols, and best practices. Whether you're a novice operator
                or an experienced technician, our training programs are
                structured to accommodate different skill levels and learning
                styles.
              </p>
              <p className="paragraph-regular mt-5">
                By investing in training, you can enhance workplace safety,
                reduce the risk of accidents, and optimize equipment
                performance. Additionally, well-trained personnel are better
                equipped to handle complex tasks, minimize downtime, and
                contribute to overall productivity.
              </p>
              <p className="paragraph-regular mt-5">
                Choose our training services to empower your workforce with the
                expertise they need to excel in port operations and drive
                success for your business.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/images/training.jpg"
                sizes="100vw"
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
