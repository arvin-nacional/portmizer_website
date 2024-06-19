import CoreValues from "@/components/CoreValues";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeProducts from "@/components/HomeProducts";
import Testimonials from "@/components/Testimonials";

const Page = () => {
  return (
    <div>
      <Hero />
      <CoreValues />
      <HomeAbout />
      <HomeProducts />
      <Testimonials />
    </div>
  );
};

export default Page;
