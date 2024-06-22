import Testimonials from "@/components/Testimonials";
import CTA from "@/components/shared/CTA";
import CareerCard from "@/components/ui/careerCard";
import Header from "@/components/ui/header";
import HiringProcessCard from "@/components/ui/hiringProcessCard";
import {
  careerOpenings,
  employeeTestimonialData,
  hiringProcess,
  testimonialData,
} from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header title="Careers" img="/assets/images/about-image.jpg" />
      <section className="flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="h2-bold margin-auto">Career Openings</h3>

            <div className="grid gap-5 grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 mt-10">
              {careerOpenings.map((component) => (
                <CareerCard
                  key={component.title}
                  title={component.title}
                  caption={component.caption}
                />
              ))}
            </div>

            <h3 className="h2-bold margin-auto mt-20">Our Hiring Process</h3>
            <h4 className="paragraph-bold">Get hired within the day!</h4>

            <div className="grid gap-5 grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 mt-10">
              {hiringProcess.map((component) => (
                <HiringProcessCard
                  key={component.title}
                  title={component.title}
                  caption={component.caption}
                  image={component.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Testimonials
        title="Testimonials"
        caption="What our employee says about us"
        data={employeeTestimonialData}
      />
      <CTA
        title="Embark on a Fulfilling Career Journey"
        action="Apply Now"
        link="/career-form"
      />
    </div>
  );
};

export default Page;
