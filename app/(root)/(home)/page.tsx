import Clients from "@/components/Clients";
import CoreValues from "@/components/CoreValues";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeProducts from "@/components/HomeProducts";
import HomeServices from "@/components/HomeServices";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/shared/CTA";
import { testimonialData } from "@/constants";

const Page = () => {
  return (
    <div>
      <Hero />
      <CoreValues />
      <HomeAbout />
      <HomeProducts />
      <HomeServices styles="bg-gray-100" />
      <Clients />
      <Partners />
      {/* <Testimonials
        title="Testimonials"
        caption="What our customer says about us"
        data={testimonialData}
      /> */}
      <CTA
        title="Want to know more about our Products and Services?"
        action="Ask for a free consult"
        link="/contact"
      />
    </div>
  );
};

export default Page;
