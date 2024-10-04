import React from "react";
import Image from "next/image";
import Subscriber from "../forms/Subscriber";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex items-center justify-center bg-light-300 px-16 py-10 max-md:px-5">
      <div className="mt-14 flex w-[1200px] flex-row  justify-between max-sm:mt-5  max-lg:grid max-lg:grid-cols-2 max-sm:flex-col max-sm:grid-cols-1">
        <div className="flex flex-col gap-5 pb-12 ">
          <Image
            src="/assets/images/logo_colored.svg"
            width={230}
            height={40}
            alt="logo"
          />
          <p className="text-dark-400 body-regular w-[300px]">
            We pursue mutually-beneficial relationship with customers,
            co-workers, shareholders and communities on a long-term basis.
          </p>
          <div className="flex gap-5">
            <a href="https://www.facebook.com/Portmizer" target="_blank">
              <Image
                src="/assets/icons/facebook_icon.svg"
                width={20}
                height={20}
                alt="logo"
                // className="invert-colors"
              />
            </a>
            <a
              href="https://www.instagram.com/portmizerhr/?hl=en"
              target="_blank"
            >
              <Image
                src="/assets/icons/instagram_icon.svg"
                width={20}
                height={20}
                alt="logo"
                // className="invert-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/portmizer-philippines-corporation/about/"
              target="_blank"
            >
              <Image
                src="/assets/icons/linkedin_icon.svg"
                width={20}
                height={20}
                alt="logo"
                // className="invert-colors"
              />
            </a>
          </div>
        </div>
        <div className=" pb-12  ">
          <p className="h3-bold text-dark-400">Links</p>
          <div className="body-regular text-dark-400 flex flex-col gap-3 mt-3">
            {footerLinks.map((component) => (
              <Link href={component.link} key={component.title}>
                {component.title}
              </Link>
            ))}
          </div>
        </div>
        <div className=" pb-12 ">
          <p className="h3-bold text-dark-400">Contact</p>
          <div className="body-regular text-dark-400">
            <div className=" mt-3 flex gap-5 ">
              <Image
                src="/assets/icons/telephone-call.svg"
                width={20}
                height={20}
                alt="logo"
              />
              <p>02-85245514</p>
            </div>
            <div className="mt-3 flex gap-5 ">
              <Image
                src="/assets/icons/paper-plane.svg"
                width={20}
                height={20}
                alt="logo"
              />
              <p>info@portmizer.com</p>
            </div>
            <div className="mt-3 flex gap-5 ">
              <Image
                src="/assets/icons/location.svg"
                width={20}
                height={20}
                alt="logo"
              />
              <p className="w-[200px] ">
                Rm. 117 Mercantile Insurance Bldg. Gen. Luna St. corner Beaterio
                St. Intramuros, Manila 1002
              </p>
            </div>
          </div>
        </div>
        <div className="pb-12  text-dark-400">
          <p className="h3-bold ">Subscribe</p>
          <p className="small-regular mb-3 py-2 ">
            Subscribe to get our latest news and updates.
          </p>
          <Subscriber />
        </div>
      </div>
    </section>
  );
};

export default Footer;
