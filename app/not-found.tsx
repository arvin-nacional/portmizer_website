import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <Header title="Error" img="/assets/images/hero-image-2.jpg" />
      <section className="flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <h2 className="h2-bold">Page Not Found</h2>
          <p className="base-medium mt-2">Could not find requested resource</p>
          <Button className="px-7 py-6 bg-primary-500 hover:bg-primary-300 transition-all duration-300 ease-in-out animate__fadeIn animate__delay-3s my-5">
            <Link
              href="/"
              className="paragraph-regular flex gap-2 items-center"
            >
              Return Home
            </Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
