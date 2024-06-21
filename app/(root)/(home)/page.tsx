import Clients from "@/components/Clients";
import CoreValues from "@/components/CoreValues";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeProducts from "@/components/HomeProducts";
import HomeServices from "@/components/HomeServices";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";

const Page = () => {
  return (
    <div>
      <Hero />
      <CoreValues />
      <HomeAbout />
      <HomeProducts />
      <HomeServices />
      <Clients />
      <Partners />
      <Testimonials />
    </div>
  );
};

export default Page;
