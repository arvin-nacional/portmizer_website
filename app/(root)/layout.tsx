import FacebookMsg from "@/components/shared/FacebookMsg";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section className="flex min-h-screen flex-1 flex-col pb-6  max-md:pb-14 ">
        <div className="mx-auto w-full">{children}</div>
      </section>
      <FacebookMsg />
      <Footer />
      <Toaster />
    </main>
  );
};

export default Layout;
