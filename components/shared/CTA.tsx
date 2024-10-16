import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  action: string;
  link: string;
}

const CTA = ({ title, action, link }: Props) => {
  return (
    <section className="flex items-center justify-center px-16 max-md:px-5 mt-10">
      <div className="w-[1200px] max-w-full flex justify-center pb-6 flex-col items-center">
        <div className="relative shadow-xl flex justify-center items-center py-12 rounded-3xl w-full flex-col cta-gradient px-20">
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            height={44}
            width={25}
            className="absolute left-9 "
          />
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            height={44}
            width={25}
            className="absolute left-20 bottom-5 "
          />
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            height={20}
            width={15}
            className="absolute left-[250px] bottom-5 max-sm:hidden"
          />
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            height={44}
            width={25}
            className="absolute right-[150px] top-8 max-sm:hidden"
          />
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            height={44}
            width={20}
            className="absolute right-[200px] bottom-8 max-sm:hidden"
          />
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            height={44}
            width={25}
            className="absolute left-[150px] top-8 max-sm:hidden"
          />
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            height={44}
            width={25}
            className="absolute right-[60px] bottom-8"
          />
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            height={44}
            width={22}
            className="absolute right-[30px] top-15 sm:hidden"
          />
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            height={44}
            width={22}
            className="absolute right-[50px] top-8"
          />
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            height={44}
            width={15}
            className="absolute left-[60px] top-8 sm:hidden"
          />

          <h2 className="h2-bold flex-wrap text-center max-sm:text-xl">
            {title}
          </h2>
          {/* <h4 className="base-bold mb-5 max-sm:text-sm max-sm:mt-5">
            Where Expertise meets Growth
          </h4> */}
          <Button className="bg-primary-500 hover:bg-primary-300 z-10 mt-10">
            <Link href={link}>{action}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
