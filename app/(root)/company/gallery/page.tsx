"use client";
import Header from "@/components/ui/header";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import image1 from "../../../../public/assets/images/gallery/1.jpg";
import image2 from "../../../../public/assets/images/gallery/2.jpg";
import image3 from "../../../../public/assets/images/gallery/3.jpg";
import { galleryImages } from "@/constants";
import Image from "next/image";

const Page = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <Header title="Gallery" img="/assets/images/about-image.jpg" />
      <section className="flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center ">
          <div className="flex flex-wrap gap-5 w-[100%] justify-center">
            {galleryImages.map((image, idx) => (
              <Image
                key={idx}
                src={image.src}
                alt={image.alt}
                onClick={() => setIndex(idx)}
                width={300}
                height={300}
                // style={{ width: "100%", height: "300px" }}
                className="cursor-pointer max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 object-cover"
              />
            ))}
          </div>

          <div>
            {index >= 0 && (
              <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={galleryImages}
                plugins={[Zoom]}
                index={index}
                // onIndexChange={setIndex}
              />
            )}
          </div>
        </div>{" "}
      </section>
    </div>
  );
};

export default Page;
