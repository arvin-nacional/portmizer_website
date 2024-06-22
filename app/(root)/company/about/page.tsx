import CoreValueItem from "@/components/ui/coreValueItem";
import Header from "@/components/ui/header";
import { coreValues, missionObjectives } from "@/constants";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header title="About" img="/assets/images/about-image.jpg" />
      <section className="flex items-center justify-center px-16 sm:py-20 max-md:px-5">
        <div className="w-[1200px] max-w-full flex justify-center pb-6 max-md:mt-10 flex-col items-center">
          <div className="flex gap-20 items-center max-md:flex-col">
            <div className="flex-1">
              <h4 className="h2-bold">Who we are</h4>
              <div className="h-[7px] w-[120px] primary-gradient mt-3"></div>
              <p className="paragraph-regular mt-5">
                Established since 1990, Portmizer Philippines Corporation
                shifted its focus to catering the needs of the shipping,
                stevedoring and container yard operators when the demand for a
                more efficient and reliable container and bulk handling
                equipment became apparent.
              </p>
              <p className="paragraph-regular mt-5">
                Over our 34-year journey, we've consistently delivered genuine
                spare parts and top-notch crane services. Upholding the highest
                standards for every customer, our operations span across Service
                Stations worldwide, catering to a growing network of crane
                owners, managers, and operators.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/images/home-about-image2.svg"
                width={0}
                height={0}
                style={{ width: "100%", height: "500px" }} // optional
                alt="home-about-image2"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="py-10">
            <div className="flex flex-col justify-center items-center">
              <h2 className="h2-bold py-10">Our Core Values</h2>
              <div className="grid grid-cols-4 pb-6 max-md:mt-10 gap-10 max-sm:grid-cols-2 align-top max-md:grid-cols-2 mt-10">
                {coreValues.map((component) => (
                  <CoreValueItem
                    image={component.image}
                    title={component.title}
                    caption={component.caption}
                    key={component.title}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="h2-bold py-10">Goals and Objectives</h2>
              <div className="grid grid-cols-2 pb-6 max-md:mt-10 gap-10 mt-10">
                {missionObjectives.map((component) => (
                  <CoreValueItem
                    image={component.image}
                    title={component.title}
                    caption={component.caption}
                    key={component.title}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-10 max-md:flex-col">
            <div className="flex-1 ">
              {" "}
              <Image
                src="/assets/images/home-about-image2.svg"
                width={0}
                height={0}
                style={{ width: "100%", height: "700px" }} // optional
                alt="home-about-image2"
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="flex-1 px-5">
              <h4 className="h2-bold">Our History</h4>
              <div className="h-[7px] w-[120px] primary-gradient mt-3"></div>
              <p className="paragraph-regular mt-5">
                PORTMIZER PHILIPPINES CORPORATION (formerly Liftmaster
                Philippines Corporation) was founded in 1979 and went
                immediately into operation and was incorporated in 1998. Its
                main goal was to provide the industrial markets with high
                quality materials handling machines and a very reliable
                after-sales support.
              </p>
              <p className="paragraph-regular mt-5">
                Its first twelve years of existence was mainly focused on
                serving the needs of storages and warehouses as well as
                manufacturing plants with appropriate equipment and technical
                designs with the end view of achieving higher efficiency and
                effectiveness in their transport and distribution of both raw
                materials and finished goods. Its core products then were pallet
                trucks, reach trucks, racks and shelves and tail lifts.
              </p>
              <p className="paragraph-regular mt-5">
                The company’s approach to total customer satisfaction with total
                handling solutions paid off very well. It gained a substantial
                market share in its 17 years of operation for internal materials
                handling and distribution sectors. Our branded equipment
                continues to this day dominate not only the domestic, but the
                international markets as well. These were BT Lifters of Sweden
                (Bought by Toyota), Link 51 Racking and Shelvings of UK, Zepro
                Taillifts of Sweden and Waltco Tailgates of USA (Bought by
                Cargotec of Finland, the parent company of Kalmar today.
              </p>
              <p className="paragraph-regular mt-5">
                Our list of prime customers includes some of the top
                500Philippine Corporations, such as SMC Group of companies
                (Chicken, Juice, Milk and Cheese), Metro Drug, Astra Zeneca,
                Jolibee, Makro, Purefoods, RFM, Coca-Cola, Universal Robina,
                Unilab, Mercury, SM, Rustans and Philipps to name a few.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
