"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MobileNav from "./MobileNav";
import { company, products, services } from "@/constants";
import { Button } from "@/components/ui/button";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3  no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ",
            className
          )}
          {...props}
        >
          <div className="flex flex-row">
            <div className="flex flex-row align-center">
              <Image
                src="/assets/icons/chevron-right.svg"
                width={24}
                height={24}
                alt="arrow-icon"
              />
              <div className="text-sm font-medium p-1">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "flex fixed z-50 w-full  justify-center items-center transition-all duration-300 ",
        scrolled ? "navbar-solid" : "navbar"
      )}
    >
      <div
        className={cn(
          "flex gap-5 md:gap-2 dark:shadow-none w-full sm:px-12 lg:max-w-[1200px] items-center justify-between 2xl:max-w-[1400px]",
          scrolled ? "p-4" : "p-6"
        )}
      >
        <Link href="/">
          <Image
            src="/assets/images/white_logo.svg"
            width={230}
            height={60}
            alt="logo"
          />
        </Link>
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            <div className="flex justify-between w-full ">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-white`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="gap-3 p-4  w-[350px] bg-white ">
                    {products.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.link}
                      >
                        {/* {component.description} */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="gap-3 p-4 w-[300px] bg-white">
                    {company.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.link}
                      >
                        {/* {component.description} */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="gap-3 p-4 w-[300px] bg-white">
                    {services.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.link}
                      >
                        {/* {component.description} */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-white`}
                  >
                    Locations
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="/contact" className="max-lg:hidden">
          <Button className="text-primary-500 bg-white hover:bg-gradient-to-br  focus:outline-none dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-6 py-2.5 text-center text-nowrap hover:bg-white">
            Contact Us
          </Button>
        </Link>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
