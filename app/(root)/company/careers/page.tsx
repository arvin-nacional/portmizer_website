import Testimonials from "@/components/Testimonials";
import CTA from "@/components/shared/CTA";
import { Button } from "@/components/ui/button";
import CareerCard from "@/components/ui/careerCard";
import Header from "@/components/ui/header";
import HiringProcessCard from "@/components/ui/hiringProcessCard";
import {
  careerOpenings,
  employeeTestimonialData,
  hiringProcess,
  testimonialData,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header title="Careers" img="/assets/images/about-image.jpg" />
      <section className="flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="h2-bold margin-auto">Career Openings</h3>

            <div className="grid gap-12 grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 mt-10 p-10 shadow-xl rounded-xl">
              {/* {careerOpenings.map((component) => (
                <CareerCard
                  key={component.title}
                  title={component.title}
                  caption={component.caption}
                />
              ))} */}

              <div>
                <div className="flex gap-2">
                  <Image
                    src="/assets/icons/engineer.svg"
                    alt="engineer icon"
                    width={30}
                    height={30}
                    className="mb-5"
                  />
                  <p className="h2-bold mb-5">Field Service Technician</p>
                </div>

                <p className="paragraph-semibold">
                  Portmizer Philippines Corporation Mandaue City, Cebu
                </p>
                <p className="paragraph-semibold">
                  Technicians (Trades & Services)
                </p>
                <p className="paragraph-semibold">Full time</p>

                <br />
                <p className="base-bold mb-2">Description:</p>
                <p>
                  We are looking for a Field Service Technician to deliver the
                  desired customer service experience. The goal is to drive
                  service success that improves customer satisfaction, maximizes
                  customer retention and increases profitability in heavy
                  equipment servicing.
                </p>
              </div>
              <div>
                <p className="base-bold mb-5">Requirements & Skils:</p>
                <ul className="list-disc">
                  <li>
                    Provide service and customer support during field visits or
                    dispatches
                  </li>
                  <li>
                    Manage all on site installation, repair, maintenance and
                    test tasks
                  </li>
                  <li>
                    Diagnose errors or technical problems and determine proper
                    solutions Produce timely and detailed service reports
                  </li>
                  <li>Document processes</li>
                  <li>Follow all company’s filed procedures and protocols</li>
                  <li>
                    Cooperate with technical team and share information across
                    the organization
                  </li>
                  <li>Build positive relationships with customers</li>

                  <li>Proven Field Service experience</li>
                  <li>
                    Ability to troubleshoot, test, repair and service technical
                    equipment
                  </li>
                </ul>
              </div>
              <div>
                <p className="base-bold mb-5">Qualifications:</p>
                <ul className="list-disc">
                  <li>
                    Graduate of Industrial Technology, Heavy Equipment Servicing
                  </li>
                  <li>
                    Vocational Diploma in Mechanical or Electrical Technology
                  </li>
                  <li>At least 2 years heavy equipment servicing experience</li>
                  <li>Background on hydraulics, pneumatic and electrical</li>
                  <li>Driving skills (Restriction Code: A, B1, B2)</li>
                  <li>Willing to be assigned at Cebu Branch</li>

                  <li>Full Time position. </li>
                </ul>
                <Link href="/career-form">
                  <Button
                    className="text-primary-500 border-primary-500 hover:outline-none hover:text-white hover:bg-primary-500 mt-5"
                    variant="outline"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid gap-12 grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 mt-10 p-10 shadow-xl rounded-xl">
              {/* {careerOpenings.map((component) => (
                <CareerCard
                  key={component.title}
                  title={component.title}
                  caption={component.caption}
                />
              ))} */}

              <div>
                <div className="flex gap-2">
                  <Image
                    src="/assets/icons/engineer.svg"
                    alt="engineer icon"
                    width={30}
                    height={30}
                    className="mb-5"
                  />
                  <p className="h2-bold mb-5">Sales Coordinator</p>
                </div>

                <p className="paragraph-semibold">
                  Portmizer Philippines Corporation
                </p>
                <p className="paragraph-semibold">Intramuros, Metro Manila</p>
                <p className="paragraph-semibold">Full time</p>

                <br />
                <p className="base-bold mb-5">What We're Looking For:</p>
                <ul className="list-disc">
                  <li>
                    Strong administrative and organizational skills with the
                    ability to multitask and prioritize tasks effectively.
                  </li>
                  <li>
                    Excellent communication and interpersonal skills, both
                    written and verbal.
                  </li>
                  <li>
                    A customer-focused approach dedicated to providing
                    outstanding service.
                  </li>
                  <li>
                    Demonstrated experience in a sales support or administrative
                    capacity, ideally within the sales industry.
                  </li>
                  <li>
                    Ability to work well in a team and collaborate with
                    cross-functional departments.
                  </li>
                </ul>
              </div>
              <div>
                <p className="base-bold mb-2">Key Responsibilities</p>
                <ul className="list-disc">
                  <li>
                    Offer administrative support to the sales team by scheduling
                    appointments, organizing client meetings, and managing sales
                    pipelines.
                  </li>
                  <li>
                    Assist in preparing sales proposals, presentations, and
                    related sales documentation.
                  </li>
                  <li>
                    Address customer inquiries, respond to requests, and ensure
                    exceptional customer service.
                  </li>
                  <li>
                    Maintain accurate records of sales activities, orders, and
                    customer data.
                  </li>
                  <li>
                    Coordinate with marketing, operations, and other departments
                    to facilitate the sales process.
                  </li>
                  <li>
                    Identify and pursue new business opportunities to drive
                    sales growth.
                  </li>
                </ul>
              </div>
              <div>
                <p className="base-bold mb-5">Qualifications:</p>
                <ul className="list-disc">
                  <li>
                    Bachelor's degree in Business Administration, majoring in
                    Marketing Management, or a related field.
                  </li>
                  <li>
                    At least 2-3 years of relevant experience in Sales
                    Coordination.
                  </li>
                  <li>
                    Strong organizational, interpersonal, and written
                    communication skills.
                  </li>
                  <li>Well organized and keen to details</li>
                  <li>
                    Willingness to learn, especially in the heavy equipment
                    industry.
                  </li>
                  <li>Willing to be assigned at Cebu Branch</li>

                  <li>Proficient in Microsoft Office applications. </li>
                  <li>Open to fresh graduates. </li>
                  <li>Must be willing to work in Intramuros, Manila.</li>
                </ul>
                <Link href="/career-form">
                  <Button
                    className="text-primary-500 border-primary-500 hover:outline-none hover:text-white hover:bg-primary-500 mt-5"
                    variant="outline"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>

            <h3 className="h2-bold margin-auto mt-20">Our Hiring Process</h3>
            <h4 className="paragraph-bold">Get hired within the day!</h4>

            <div className="grid gap-5 grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 mt-10">
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
      {/* <Testimonials
        title="Testimonials"
        caption="What our employee says about us"
        data={employeeTestimonialData}
      /> */}
      <CTA
        title="Embark on a Fulfilling Career Journey"
        action="Apply Now"
        link="/career-form"
      />
    </div>
  );
};

export default Page;
