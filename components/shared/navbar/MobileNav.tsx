"use client";

import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { company, products, services, sidebarLinks } from "../../../constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };
  return (
    <section className="flex h-full flex-col gap-2 pt-8 px-3">
      <SheetClose asChild>
        <Link href="/" className="flex gap-3 base-semibold mb-5">
          <Image
            src="/assets/icons/home-icon.svg"
            alt="home-icon"
            width={24}
            height={24}
          />
          Home
        </Link>
      </SheetClose>

      <div className="relative pb-4">
        <button
          onClick={() => toggleSection("products")}
          className="flex gap-3 lg:inline-block lg:mt-0 text-dark-500 hover:text-primary-500 mr-4 base-semibold"
        >
          <Image
            src="/assets/icons/products.svg"
            alt="home-icon"
            width={24}
            height={24}
          />
          Products
        </button>
        {openSection === "products" && (
          <div className=" flex flex-col text-dark-500 mt-2 py-3 mb-2 w-full shadow-lg lg:absolute z-10 items-start rounded-lg">
            {products.map((product) => (
              <SheetClose asChild key={product.link}>
                <Link href={product.link} className=" hover:bg-gray-600">
                  <div
                    className="flex flex-row px-3 mt-2 items-start justify-start text-left"
                    key={product.title}
                  >
                    <Image
                      src="/assets/icons/chevron-right.svg"
                      width={24}
                      height={24}
                      alt="arrow-icon"
                    />

                    {product.title}
                  </div>
                </Link>
              </SheetClose>
            ))}
          </div>
        )}
      </div>
      <div className="relative pb-4">
        <button
          onClick={() => toggleSection("company")}
          className="flex gap-3 lg:inline-block lg:mt-0 text-dark-500 hover:text-primary-500 mr-4 base-semibold"
        >
          <Image
            src="/assets/icons/enterprise.svg"
            alt="home-icon"
            width={24}
            height={24}
          />
          Company
        </button>
        {openSection === "company" && (
          <div className=" flex flex-col text-dark-500 mt-2 py-3 mb-2 w-full shadow-lg lg:absolute z-10 items-start rounded-lg">
            {company.map((item) => (
              <SheetClose asChild key={item.link}>
                <Link href={item.link} className=" hover:bg-gray-600">
                  <div
                    className="flex flex-row px-3 mt-2 items-start justify-start text-left"
                    key={item.title}
                  >
                    <Image
                      src="/assets/icons/chevron-right.svg"
                      width={24}
                      height={24}
                      alt="arrow-icon"
                    />

                    {item.title}
                  </div>
                </Link>
              </SheetClose>
            ))}
          </div>
        )}
      </div>
      <div className="relative pb-4">
        <button
          onClick={() => toggleSection("services")}
          className="flex gap-3 lg:inline-block lg:mt-0 text-dark-500 hover:text-primary-500 mr-4 base-semibold"
        >
          <Image
            src="/assets/icons/services.svg"
            alt="home-icon"
            width={24}
            height={24}
          />
          Services
        </button>
        {openSection === "services" && (
          <div className=" flex flex-col text-dark-500 mt-2 py-3 mb-2 w-full shadow-lg lg:absolute z-10 items-start rounded-lg">
            {services.map((item) => (
              <SheetClose asChild key={item.link}>
                <Link href={item.link} className=" hover:bg-gray-600">
                  <div
                    className="flex flex-row px-3 mt-2 items-start justify-start text-left"
                    key={item.title}
                  >
                    <Image
                      src="/assets/icons/chevron-right.svg"
                      width={24}
                      height={24}
                      alt="arrow-icon"
                    />

                    {item.title}
                  </div>
                </Link>
              </SheetClose>
            ))}
          </div>
        )}
      </div>
      <Link href="/locations" className="flex gap-3 base-semibold">
        {" "}
        <Image
          src="/assets/icons/port.svg"
          alt="home-icon"
          width={24}
          height={24}
        />{" "}
        Locations
      </Link>
      <Link href="/contact">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-primary-500 to-primary-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 mt-10"
        >
          Contact Us
        </button>
      </Link>
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors lg:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 flex h-full flex-col justify-between border-none"
      >
        <div>
          <div className="my-5 p-3">
            <Image
              src="/assets/images/logo_colored.svg"
              width={250}
              height={40}
              alt="logo"
            />
          </div>
          <div>
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
          </div>
        </div>

        <div className="flex gap-5 p-6">
          <a href="https://www.facebook.com/rvinpaul" target="_blank">
            <Image
              src="/assets/icons/facebook_icon.svg"
              width={20}
              height={20}
              alt="logo"
              // className="invert-colors"
            />
          </a>
          <a href="https://www.instagram.com/rvinpaul" target="_blank">
            <Image
              src="/assets/icons/instagram_icon.svg"
              width={20}
              height={20}
              alt="logo"
              // className="invert-colors"
            />
          </a>
          <a href="https://www.linkedin.com/rvinpaul" target="_blank">
            <Image
              src="/assets/icons/linkedin_icon.svg"
              width={20}
              height={20}
              alt="logo"
              // className="invert-colors"
            />
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
