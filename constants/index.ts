import {
  CareerOpeningsProps,
  GalleryImages,
  HiringProcessProps,
  LocationProps,
  LogoProps,
  MobileNavLinks,
  ProductCardProps,
  ProductDetailsProps,
  SidebarLink,
  TestimonialsProps,
  coreValuesProps,
} from "@/types";
import image from "next/image";
import { title } from "process";

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    label: "Home",
    route: "/",
  },
  {
    imgURL: "/assets/icons/about.svg",
    label: "About",
    route: "/about",
  },
  {
    imgURL: "/assets/icons/portfolio.svg",
    label: "Portfolio",
    route: "/portfolio",
  },
  {
    imgURL: "/assets/icons/blog.svg",
    label: "Blog",
    route: "/blog",
  },
  {
    imgURL: "/assets/icons/services.svg",
    label: "Services",
    route: "/services",
  },
];

export const products: MobileNavLinks[] = [
  {
    link: "/products/kalmar",
    title: "Kalmar",
  },
  {
    link: "/products/sumitomo",
    title: "Sumitomo Rubber Industries",
  },
  {
    link: "/products/mantsinen",
    title: "Mantsinen Mobile Harbor Crane",
  },
  {
    link: "/products/tec-container",
    title: "Tec Container",
  },
  {
    link: "/products/actiw-loadplate",
    title: "Actiw Loadplate",
  },
  {
    link: "/products/dafo",
    title: "Dafo Vehicle Fire Protection",
  },
];

export const company: MobileNavLinks[] = [
  {
    link: "/company/about",
    title: "About",
  },
  {
    link: "/company/gallery",
    title: "Gallery",
  },
  {
    link: "/company/news",
    title: "News and Updates",
  },
  {
    link: "/company/careers",
    title: "Careers",
  },
];
export const services: MobileNavLinks[] = [
  {
    link: "/services/genuine-spare-parts",
    title: "Genuine Spare Parts",
  },
  {
    link: "/services/preventive-maintenance",
    title: "Preventive Maintenance",
  },
  {
    link: "/services/performance-upgrade",
    title: "Performance Upgrade",
  },
  {
    link: "/services/conversions-overhauling",
    title: "Conversions and Overhauling",
  },
  {
    link: "/services/training",
    title: "Trainings",
  },
];

export const footerLinks: MobileNavLinks[] = [
  // {
  //   link: "/",
  //   title: "Home",
  // },
  // {
  //   link: "/about",
  //   title: "About",
  // },
  {
    link: "/products",
    title: "Products",
  },
  {
    link: "/services",
    title: "Services",
  },
  {
    link: "/locations",
    title: "Locations",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

export const testimonialData: TestimonialsProps[] = [
  {
    testimonialThumb: "/assets/images/testimonial-image2.svg",
    testimonialText:
      "Arvin's expertise in web development is unmatched. He seamlessly translated our ideas into a user-friendly and visually appealing website. His attention to detail and commitment to excellence are commendable.",
    avatarName: "John Doe",
    avatarDesignation: "Principal Solution Architect",
    ratings: "5",
  },
  {
    testimonialThumb: "/assets/images/testimonial-image2.svg",
    testimonialText:
      "Arvin's expertise in web development is unmatched. He seamlessly translated our ideas into a user-friendly and visually appealing website. His attention to detail and commitment to excellence are commendable.",
    avatarName: "John Doe",
    avatarDesignation: "Principal Solution Architect",
    ratings: "5",
  },
  {
    testimonialThumb: "/assets/images/testimonial-image2.svg",
    testimonialText:
      "Arvin's expertise in web development is unmatched. He seamlessly translated our ideas into a user-friendly and visually appealing website. His attention to detail and commitment to excellence are commendable.",
    avatarName: "John Doe",
    avatarDesignation: "Principal Solution Architect",
    ratings: "5",
  },
  {
    testimonialThumb: "/assets/images/testimonial-image2.svg",
    testimonialText:
      "Arvin's expertise in web development is unmatched. He seamlessly translated our ideas into a user-friendly and visually appealing website. His attention to detail and commitment to excellence are commendable.",
    avatarName: "John Doe",
    avatarDesignation: "Principal Solution Architect",
    ratings: "5",
  },
  {
    testimonialThumb: "/assets/images/testimonial-image2.svg",
    testimonialText:
      "Arvin's expertise in web development is unmatched. He seamlessly translated our ideas into a user-friendly and visually appealing website. His attention to detail and commitment to excellence are commendable.",
    avatarName: "John Doe",
    avatarDesignation: "Principal Solution Architect",
    ratings: "5",
  },
  {
    testimonialThumb: "/assets/images/testimonial-image2.svg",
    testimonialText:
      "Arvin's expertise in web development is unmatched. He seamlessly translated our ideas into a user-friendly and visually appealing website. His attention to detail and commitment to excellence are commendable.",
    avatarName: "John Doe",
    avatarDesignation: "Principal Solution Architect",
    ratings: "5",
  },
];
export const employeeTestimonialData: TestimonialsProps[] = [
  {
    testimonialThumb: "/assets/images/employee-boy-1.svg",
    testimonialText:
      "Working at Portmizer Philippines Corporation has been an incredible journey. The company’s commitment to innovation and quality inspires me every day. I’m proud to be part of a team that values excellence and customer satisfaction.",
    avatarName: "John D.",
    avatarDesignation: "Service Technician",
    ratings: "5",
  },
  {
    testimonialThumb: "/assets/images/employee-girl-2.svg",
    testimonialText:
      "Portmizer Philippines Corporation is a fantastic place to work. The supportive environment and opportunities for professional growth have been outstanding. I feel valued and motivated to contribute to our shared success.",
    avatarName: "Maria S.",
    avatarDesignation: "Sales Manager",
    ratings: "5",
  },
  {
    testimonialThumb: "/assets/images/employee-boy-2.svg",
    testimonialText:
      "I have been with Portmizer for over a decade, and it’s been a rewarding experience. The company’s dedication to its employees’ well-being and career advancement is truly commendable. It’s a place where you can thrive and make a real impact.",
    avatarName: "Carlos R.",
    avatarDesignation: "Operations Supervisor",
    ratings: "5",
  },
  {
    testimonialThumb: "/assets/images/employee-girl-1.svg",
    testimonialText:
      "Joining Portmizer Philippines Corporation has been one of the best decisions of my career. The collaborative culture and focus on innovation create an exciting and dynamic work environment. I’m grateful for the chance to grow and develop my skills here.",
    avatarName: "Angela M.",
    avatarDesignation: " Marketing Specialist",
    ratings: "5",
  },
  {
    testimonialThumb: "/assets/images/employee-boy-3.svg",
    testimonialText:
      "At Portmizer, I feel like part of a family. The company’s emphasis on safety and professional development ensures that we can perform our jobs with confidence. It’s a great place to build a fulfilling career.",
    avatarName: "Henry L.",
    avatarDesignation: "Crane Operator",
    ratings: "5",
  },
  {
    testimonialThumb: "/assets/images/employee-girl-3.svg",
    testimonialText:
      "Portmizer Philippines Corporation genuinely cares about its employees. The positive work culture and continuous learning opportunities make it a pleasure to come to work every day. I’m proud to be part of a team that values and supports its members.",
    avatarName: "Nina G.",
    avatarDesignation: "Human Resources Manager",
    ratings: "5",
  },
];

export const heroServices: MobileNavLinks[] = [
  {
    link: "/services/genuine-spare-parts",
    title: "Genuine Spare Parts",
  },
  {
    link: "/services/preventive-maintenance",
    title: "Preventive Maintenance",
  },
  {
    link: "/services/performance-upgrade",
    title: "Performance Upgrade",
  },
  {
    link: "/services/conversions-overhauling",
    title: "Conversions and Overhauling",
  },
  {
    link: "/services/training",
    title: "Trainings",
  },
];

export const coreValues: coreValuesProps[] = [
  {
    image: "/assets/icons/trust1.svg",
    title: "Integrity",
    caption: "We uphold high standards of business ethics and good governance.",
  },
  {
    image: "/assets/icons/trust2.svg",
    title: "Commitment",
    caption:
      "We provide cost-effective solutions in terms of quality products and excellent service support.",
  },
  {
    image: "/assets/icons/trust3.svg",
    title: "Partnership",
    caption:
      "We foster long-term, mutually beneficial relationships with the community and all stakeholders.",
  },
  {
    image: "/assets/icons/trust4.svg",
    title: "Eco-friendly",
    caption:
      "We highly value environmental protection and are committed to the conservation of natural resources.",
  },
];

export const missionObjectives: coreValuesProps[] = [
  {
    image: "/assets/icons/goals1.svg",
    title: "Mission",
    caption:
      "At Portmizer Philippines Corporation, our mission is to deliver unparalleled quality and reliability in container and bulk handling solutions. We strive to exceed expectations by providing innovative equipment, genuine spare parts, and exceptional service to our global clientele.",
  },
  {
    image: "/assets/icons/goals2.svg",
    title: "Vision",
    caption:
      "Our vision is to be the preferred partner in the maritime and industrial sectors, recognized for our commitment to excellence, sustainability, and customer satisfaction. We aim to continuously innovate and expand our capabilities to meet the evolving needs of the industries we serve.",
  },
];

export const productsCard: ProductCardProps[] = [
  {
    link: "/products/kalmar",
    title: "Kalmar Port and Terminal System",
    caption:
      "Kalmar offers a wide range of cargo handling solutions and services to ports, terminals, distribution centres and to heavy industry.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    link: "/products/sumitomo",
    title: "Sumitomo Rubber Industries",
    caption:
      "Sumitomo Rubber Industry is the world's top rubber fender producer, meeting global needs with advanced technology and high quality.",
    image: "/assets/images/home-product-sumitomo.jpg",
  },
  {
    link: "/products/mantsinen",
    title: "Mantsinen Mobile Harbor Crane",
    caption:
      "Mantsinen provides a wide range of hydraulic material handlers and complementing attachments.",
    image: "/assets/images/home-products-mantsinen.jpg",
  },
  {
    link: "/products/tec-container",
    title: "Tec Container",
    caption:
      "A market leader in the design and production of container unloading, container handling and general cargo equipment in terminals and ports.",
    image: "/assets/images/home-product-tecContainer.jpg",
  },
  {
    link: "/products/actiw-loadplate",
    title: "Actiw Loadplate",
    caption:
      "Kalmar offers a wide range of cargo handling solutions and services to ports, terminals, distribution centres and to heavy industry.",
    image: "/assets/images/home-product-actiw.jpg",
  },
  {
    link: "/products/dafo",
    title: "Dafo Vehicle Fire Protection",
    caption:
      "Dafo offers complete extinguishing systems for heavy vehicles, ships, and buses, providing fast and effective fire protection.",
    image: "/assets/images/home-product-dafo.jpg",
  },
];

export const servicesCard: ProductCardProps[] = [
  {
    link: "/services/genuine-spare-parts",
    title: "Genuine Spare Parts",
    caption:
      "Supplying authentic spare parts for optimal equipment performance.",
    image: "/assets/images/services1.svg",
  },
  {
    link: "/services/preventive-maintenance",
    title: "Preventive Maintenance",
    caption:
      "Ensuring equipment longevity and reliability through preventive maintenance.",
    image: "/assets/images/services2.svg",
  },
  {
    link: "/services/performance-upgrade",
    title: "Performance Upgrade",
    caption:
      "Enhancing equipment efficiency with targeted performance upgrades.",
    image: "/assets/images/services3.svg",
  },
  {
    link: "/services/conversions-overhauling",
    title: "Conversions and Overhauling",
    caption:
      "Transforming and overhauling equipment for improved functionality.",
    image: "/assets/images/services4.svg",
  },
  {
    link: "/services/training",
    title: "Trainings",
    caption:
      "Providing expert training programs for safe and efficient equipment operation.",
    image: "/assets/images/services5.svg",
  },
];

export const clientLogo: LogoProps[] = [
  {
    src: "/assets/logo/0.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/1.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/2.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/3.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/4.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/5.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/6.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/7.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/8.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/9.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/10.svg",
    alt: "client 1",
  },
  {
    src: "/assets/logo/11.svg",
    alt: "client 1",
  },
];
export const partnerLogo: LogoProps[] = [
  {
    src: "/assets/logo/partner-logo-1.svg",
    alt: "Kalmar",
  },
  {
    src: "/assets/logo/partner-logo-2.svg",
    alt: "Sumitomo Rubber Industries",
  },
  {
    src: "/assets/logo/partner-logo-3.svg",
    alt: "TEC Container",
  },
  {
    src: "/assets/logo/partner-logo-4.svg",
    alt: "Dafo vehicle fire protection",
  },
  {
    src: "/assets/logo/partner-logo-5.svg",
    alt: "Actiw",
  },
  {
    src: "/assets/logo/partner-logo-6.svg",
    alt: "Mantsinen",
  },
];

export const careerOpenings: CareerOpeningsProps[] = [
  {
    title: "Admin and Finance Department",
    caption:
      "Manages financial operations and administrative tasks. Roles include accountants, financial analysts, and office managers, focusing on budget management, financial reporting, and payroll processing.",
  },
  {
    title: "Service Department",
    caption:
      "Provides customer support and maintenance. Roles include customer service reps and technical support specialists, focusing on troubleshooting, resolving complaints, and ensuring customer satisfaction.",
  },
  {
    title: "Sales Derpartment",
    caption:
      "Drives revenue through selling products or services. Roles include sales reps and account managers, focusing on identifying potential clients, building relationships, and meeting sales targets.",
  },
];

export const hiringProcess: HiringProcessProps[] = [
  {
    image: "/assets/icons/hiringProcess.svg",
    title: "Assessment",
    caption:
      "Discover your fit. Our assessments reveal your strengths and match you with the perfect role. Let's unlock your potential together.",
  },
  {
    image: "/assets/icons/hiringProcess.svg",
    title: "Interview",
    caption:
      "Discover your fit. Our assessments reveal your strengths and match you with the perfect role. Let's unlock your potential together.",
  },
  {
    image: "/assets/icons/hiringProcess.svg",
    title: "Get Hired!",
    caption:
      "Discover your fit. Our assessments reveal your strengths and match you with the perfect role. Let's unlock your potential together.",
  },
];

export const locations: LocationProps[] = [
  {
    location: "Manila",
    address:
      "Rm. 117 Mercantile Insurance Bldg. Gen. Luna St. corner Beaterio, St. Intramuros, Manila 1002",
    number: "02-85245514",
  },
  {
    location: "Cebu",
    address:
      "#7 Door 2B Arayat Apartment Mt. Arayat St. Singson Village Brgy Tipolo Mandaue City",
    number: "02-85245514",
  },
  {
    location: "Laguna",
    address:
      "Ma. Leonora Subd., #01 Orchids St. Brgy. Mayapa, Canlubang, Calamba City, Laguna 4028  (corner of Sampaguita St. and Orchids St.)",
    number: "+63 49303 9502",
  },
  {
    location: "Davao",
    address:
      "Door-3 PGJ REALTY, Km. 8 Agusan National Highway, Brgy. Vicente Hizon Sr., Buhangin District, Davao City 8000",
    number: "+63 82 234 6284",
  },
];

export const galleryImages: GalleryImages[] = [
  {
    src: "/assets/images/gallery/1.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/2.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/3.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/4.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/5.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/6.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/7.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/8.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/9.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/10.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/11.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/12.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/13.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/14.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/15.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/16.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/17.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/18.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/19.jpg",
    alt: "Gallery Image",
  },
  {
    src: "/assets/images/gallery/20.jpg",
    alt: "Gallery Image",
  },
];

export const kalmarProductCard: ProductCardProps[] = [
  {
    link: "/products/kalmar/reachstacker",
    title: "Reachstacker",
    caption:
      "Proven to deliver excellent lifting power, user-friendly operation, low running costs and excellent environmental performance.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    link: "/products/kalmar/empty-container-handler",
    title: "Empty Container Handler",
    caption:
      "Kalmar's empty container handlers enhance container handling efficiency. Our customizable solutions include single container stackers (8-11 tonnes, 4-8 high) and double container stackers (10-11 tonnes).",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    link: "/products/kalmar/forklift-trucks",
    title: "Forklift Trucks",
    caption:
      "Kalmar has been the preferred brand among quality-aware forklift truck drivers and owners. The trucks are renowned and appreciated for their outstanding efficiency, safety, reliability and of course their low operating cost.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    link: "/products/kalmar/trailer-tractor",
    title: "Trailer Tractor",
    caption:
      "Solutions for port, terminal, logistics, industrial and intermodal applications.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    link: "/products/kalmar/kalmar-insight",
    title: "Kalmar Insight",
    caption: "Performance Management Tool for cargo handling operations.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
];

export const kalmarReachStackerCard: ProductDetailsProps[] = [
  {
    title: "Kalmar Essential Reachstacker",
    caption:
      "Kalmar Essential reachstacker DRU450 is a reliable, robust and highly efficient machine. With the Essential DRU reachstacker you will get more for your money without compromising on quality.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Kalmar Empty and Semi-laden Container Reachstacker",
    caption:
      "The Kalmar Reachstacker DRG100-140 for empty and semi-laden containers can handle loads up to 14 tonnes, stacking them up to eight high and three deep. This reach stacker is able to handle a wide variety of containers precisely and safely even in confined spaces.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Kalmar Gloria Reachstacker ",
    caption: "Meet the latest generation of Kalmar Reachstacker!",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Kalmar Super Gloria Reachstacker",
    caption:
      "The Kalmar Super Gloria Reachstacker is a real heavy lifter, able to handle loads up to 130 tonnes when working solo or over 260 tonnes when working in tandem with another Super Gloria Reachstacker.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Kalmar Electric Reachstacker ",
    caption: "Shifting to electric? See our Kalmar Electric Reachstacker now!",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Kalmar Eco Reachstacker",
    caption:
      "The Kalmar Eco Reachstacker provides you with an eco-efficient solution that is guaranteed to use significantly less fuel than other reachstackers.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
];

export const kalmarEmptyContainerHandler: ProductDetailsProps[] = [
  {
    title: "Essential Empty Container Handler DCU80-100",
    caption:
      "Reliable and efficient, designed for handling empty containers with lifting capacities of 8 to 10 tonnes.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Empty Container Handler DCG80-110",
    caption:
      "Versatile and powerful, offering lifting capacities of 8 to 11 tonnes for enhanced container handling efficiency.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Electric Empty Container Handler ECG70",
    caption:
      "Eco-friendly and efficient, this electric handler offers a 7-tonne lifting capacity, reducing emissions and operational costs.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Loaded Container Handlers",
    caption:
      "Robust and high-performance handlers designed to manage fully loaded containers, ensuring optimal productivity and reliability.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
];
export const kalmarForkliftTrucks: ProductDetailsProps[] = [
  {
    title: "Medium Forklift Trucks 9-18 ton",
    caption:
      "Durable and versatile forklifts designed for medium-duty applications, with lifting capacities from 9 to 18 tonnes.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Medium Electric Forklift Trucks 9-18 ton",
    caption:
      "Efficient and eco-friendly electric forklifts, offering the same 9 to 18 tonnes lifting capacities with reduced emissions.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Heavy Electric Forklift Trucks 18-33 ton",
    caption:
      "Powerful electric forklifts for heavy-duty tasks, providing 18 to 33 tonnes lifting capacities while minimizing environmental impact.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Heavy Forklift Trucks 18-54 ton",
    caption:
      "Robust forklifts capable of handling heavy loads, with lifting capacities ranging from 18 to 54 tonnes",
    image: "/assets/images/home-product-kalmar.jpg",
  },
];

export const kalmarTrailerTractor: ProductDetailsProps[] = [
  {
    title: "Kalmar Essential Terminal Tractor TL2, Shunt Truck and Yard Truck",
    caption:
      "Built on tested and proven platform, so you get a reliable and robust machine that can handle the harshest condition.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title:
      "Heavy Terminal Tractor TR618i, TT618i, TRL618i, RoRo Tractor, Shunt Truck and Yard Truck",
    caption:
      "The Kalmar Heavy Terminal Tractors are robust, reliable and have an excellent performance when moving heavy loads in harsh port conditions.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Kalmar Ottawa T2 Terminal Tractor, Shunt Truck and Yard Truck",
    caption:
      "The Ottawa T2 Terminal Tractor is the latest generation machine from the creator of the terminal tractor in 1958. Designed to bring order, control and efficiency to your trailer handling.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Kalmar T2i Terminal Tractor",
    caption:
      "Kalmar’s smartest terminal tractor yet and comes as a complete package.",
    image: "/assets/images/home-product-kalmar.jpg",
  },
  {
    title: "Kalmar TX Electrical Terminal Tractor",
    caption:
      "TX Electric Yard Truck powered by Lithium-ion batteries can operates up to 22 hours on a single charge and be recharged in two hours",
    image: "/assets/images/home-product-kalmar.jpg",
  },
];

export const sumitomoRubberIndustries: ProductDetailsProps[] = [
  {
    title: "Hyper Omega type fender",
    caption:
      "Conventional cylindrical pivot-type fenders have been highly praised for their original performance.",
    image: "/assets/images/home-product-sumitomo.jpg",
  },
  {
    title: "Pie-type fender",
    caption:
      "Was developed as a wharf-mounted fender for large ships (over 30,000 tons). It absorbs a large amount of kinetic energy with a wide impact plate, allowing the ship to dock safely with low surface pressure.",
    image: "/assets/images/home-product-sumitomo.jpg",
  },
  {
    title: "Ultra-pi type fender",
    caption:
      "Has a more economical design, higher energy absorption, and a larger design compression to reduce ship motion when moored.",
    image: "/assets/images/home-product-sumitomo.jpg",
  },
  {
    title: "Lambda-type fender",
    caption:
      "Excellent durability and cost-effectiveness. Used in many ports both domestically and overseas.",
    image: "/assets/images/home-product-sumitomo.jpg",
  },
];

export const tecContainerProductCard: ProductCardProps[] = [
  {
    link: "/products/tec-container/container-spreaders",
    title: "Container Spreaders",
    caption:
      "Efficient and reliable spreaders for safe and precise container handling.",
    image: "/assets/images/home-product-tecContainer.jpg",
  },
  {
    link: "/products/tec-container/reachstacker-attachments",
    title: "Reachstacker Attachments",
    caption:
      "Versatile attachments enhancing the functionality and efficiency of your reachstacker.",
    image: "/assets/images/home-product-tecContainer.jpg",
  },
  {
    link: "/products/tec-container/overheight-frame",
    title: "Overheight Frames",
    caption:
      "Specialized frames for handling oversized containers securely and efficiently.",
    image: "/assets/images/home-product-tecContainer.jpg",
  },
  {
    link: "/products/tec-container/spreader-beams",
    title: "Spreader Beams / Lifting Beams",
    caption:
      "Durable beams designed for lifting and handling various heavy loads.",
    image: "/assets/images/home-product-tecContainer.jpg",
  },
  {
    link: "/products/tec-container/forklift-truck-attachments",
    title: "Forklift Truck Attachments",
    caption:
      "Innovative attachments to expand the capabilities of your forklift trucks.",
    image: "/assets/images/home-product-tecContainer.jpg",
  },
  {
    link: "/products/tec-container/lashing-cages",
    title: "Lashing Cages",
    caption:
      "Safe and sturdy cages for securing and handling cargo during transportation.",
    image: "/assets/images/home-product-tecContainer.jpg",
  },
];

export const tecContainerSpreaders: ProductDetailsProps[] = [
  {
    title: "Semi Automatic Spreaders",
    caption:
      "Newly designed floating twist-locks that can be easily removed and replaced when they are damaged",
    image: "/assets/images/home-product-tecContainer.jpg",
  },
  {
    title: "Easy Spreaders",
    caption:
      "Ready for non-intensive use and suitable for all container types. Available in door and outdoor versions.",
    image: "/assets/images/home-product-tecContainer.jpg",
  },
  {
    title: "Spreaders for Indoor Use",
    caption:
      "Semi-automatic or manually operated for all kinds of containers with short wires or directly linked ot the hook of the crane.",
    image: "/assets/images/home-product-tecContainer.jpg",
  },
];
export const tecContainerReachstackerAttachments: ProductDetailsProps[] = [
  {
    title: "Frame with Double Hook",
    caption:
      "This frame transforms any spreader into a Multipurpose transporter with a lower hook for general cargo. Different configurations, lengths and SWL up to 80Tons",
    image: "/assets/images/tec-container/image1.jpg",
  },
  {
    title: "Multipurpose Frame with Lower Coil Handler",
    caption:
      "This frame transforms any spreader for a container into a coil handler. The SWL and sizes can be customised to suit your designated use and particular requirements.",
    image: "/assets/images/tec-container/image2.jpg",
  },
  {
    title: "Multipurpose Beam with Lower Hook",
    caption:
      "This Beam transforms any spreader into a multipurpose transporter with a lower hook for general cargo.",
    image: "/assets/images/tec-container/image3.jpg",
  },
  {
    title: "Sliding fork frame for reach stackers",
    caption:
      "This versatile frame with forks can easily turn any reach stackers into a forklift truck. It has a very low maintenance cost and a robust structure. Standard SWL is 30T but can be customised according to client’s needs.",
    image: "/assets/images/tec-container/image4.png",
  },
  {
    title: "Lateral Coil Handler for Reach Stacker",
    caption:
      "This is an attachment that eases the load/unload of transversal coils from or to a train or truck. Hydraulically activated it can handle diverse sizes and numbers of coils each cycle.",
    image: "/assets/images/tec-container/image5.jpg",
  },
  {
    title: "Multipurpose Frame with Multiple Lower Lifting Points",
    caption:
      "This frame transforms a spreader into a multipurpose transporter with multiple lower lifting points for general cargo. Multiple configurations, lengths and SWL available.",
    image: "/assets/images/tec-container/image6.jpg",
  },
  {
    title: "Overheight Frame for Open Cargo",
    caption:
      "A classic for flat racks and open cargo handling with a reach stacker. All options available – telescopic and fixed, fully automatic or mechanical, all sizes and heights.",
    image: "/assets/images/tec-container/image7.jpg",
  },
];

export const tecContainerOverheightFrame: ProductDetailsProps[] = [
  {
    title: "Fully Automatic and Universal Frames",
    caption:
      "This overheight frame is the cutting-edge solution for handling oversized cargo in ports. Its design and operational method significantly reduce loading and unloading times, enhancing safety for stevedores. It is the ideal model for heavy oversized cargo traffic.",
    image: "/assets/images/tec-container/overheight-1.jpg",
  },
  {
    title: "Fully Mechanical and Fully Universal Universal Over Height Frames",
    caption:
      "This overheight frame is the perfect solution for managing low volumes of oversized cargo. It marks a significant improvement over the traditional use of chains with hooks. The twist locks are operated using chains positioned at the short sides of the frame and feature security probes to prevent accidental opening or closing.",
    image: "/assets/images/tec-container/overheight-2.jpg",
  },
  {
    title: "Mechanical Frames",
    caption:
      "This overheight frame is the optimal solution for applications requiring a physical connection between it and the main spreader. When the main spreader's twist locks open, the overheight frame also opens, and the same mechanism applies when the main spreader closes. This setup significantly aids crane operators in their tasks. It operates entirely mechanically, without the need for a power supply.",
    image: "/assets/images/tec-container/overheight-4.png",
  },
  {
    title: "Overheight Manual and Universal Frames",
    caption:
      "This overheight frame is the perfect solution for handling low volumes of oversized cargo. It offers a significant improvement over the traditional use of chains with hooks. The twist locks are operated using chains located at the short sides of the frame and include security probes to prevent accidental opening or closing.",
    image: "/assets/images/tec-container/overheight-3.jpg",
  },
];

export const tecContainerSpreaderBeams: ProductDetailsProps[] = [
  {
    title: "Spreader Beam",
    caption:
      "Transforming a standard spreader into a versatile multipurpose frame is effortless with this product. By installing two units, one on each short side of the spreader, it becomes adaptable to accommodate various load configurations. It features D-rings and can handle loads up to SWL 20 tons, making it a highly practical solution for diverse lifting needs.",
    image: "/assets/images/tec-container/spreader-beams-1.jpg",
  },
  {
    title: "Multipurpose Beam",
    caption:
      "Multipurpose Beam, the essential lifting beam for handling general cargo. It is available in a range of configurations, with capacities from SWL 16 tons up to 45 tons and widths spanning from 6 meters to 12 meters. Custom configurations are also available to meet specific operational needs.",
    image: "/assets/images/tec-container/multipurpose-beam.jpg",
  },
  {
    title: "Modular Beam",
    caption:
      "The most convenient solution for utilizing multiple beams efficiently. Featuring a central body and two lateral heads with adjustable links, it accommodates both single and tandem crane operations seamlessly. Customize its length and Safe Working Load (SWL) up to 100 tons to meet specific lifting requirements with ease.",
    image: "/assets/images/tec-container/modular-beam.png",
  },
  {
    title: "Heavy Duty Beam",
    caption:
      "Comprehensive lineup of heavy-duty beams and frames, designed for use with both single and tandem cranes. Our range starts from a minimum Safe Working Load (SWL) of 30 tons, extending up to 100 tons for maximum lifting capacity. These products are also available in telescopic versions, offering flexibility in length and SWL customization to suit diverse operational needs.",
    image: "/assets/images/tec-container/heavy-duty-beam.png",
  },
  {
    title: "Multipurpose Heavy Beam",
    caption:
      "A powerful and versatile solution for heavy lifting tasks. It's compatible with both single and tandem cranes, featuring a central lower double hook or shackles holes capable of handling up to 50 tons each. Choose from SWL options of 75 tons at the central hook or 100 tons at the lateral holes, providing flexibility to meet various lifting requirements with multiple customizable configurations.",
    image: "/assets/images/tec-container/multipurpose-beam2.png",
  },
  {
    title: "Simple Beam for Shackles",
    caption:
      "A a specialized solution designed to streamline loading and unloading operations. Suitable for use with single or tandem cranes, this beam offers customizable length and Safe Working Load (SWL), providing versatility to address various lifting challenges efficiently.",
    image: "/assets/images/tec-container/simple-beam.png",
  },
  {
    title: "Beam for Tandem Cranes",
    caption:
      "The optimal solution for integrating two cranes into a single cohesive unit. This beam facilitates the seamless collaboration of two cranes, enhancing operational efficiency and lifting capacity.",
    image: "/assets/images/tec-container/beam-for-tandem-cranes.png",
  },
  {
    title: "Small beam for Heavy loads",
    caption:
      "Combining compact size with impressive strength. This beam offers customizable length and Safe Working Load (SWL), making it versatile for various heavy lifting applications.",
    image: "/assets/images/tec-container/heavy-loads.png",
  },
  {
    title: "Beam for Tandem Cranes",
    caption:
      "Designed to integrate two cranes onto a single beam. This product offers customizable length and Safe Working Load (SWL), providing flexibility to suit diverse lifting requirements.",
    image: "/assets/images/tec-container/heavy-loads.png",
  },
  {
    title: "Gravity Point Regulation",
    caption:
      "Designed to adjust the gravity point of loads when balance is not achieved. This system features lower lifting holes, allowing for customizable length and Safe Working Load (SWL), ensuring optimal load management in diverse lifting scenarios.",
    image: "/assets/images/tec-container/heavy-loads-beam.png",
  },
];
export const tecContainerForkliftTruckAttachments: ProductDetailsProps[] = [
  {
    title: "Multipurpose Hooks",
    caption:
      "Designed to transform a standard forklift truck into a versatile vehicle with ease. Featuring a special rotary hook beneath the main structure, this model supports up to 32 tons and offers customizable Safe Working Load (SWL) to suit your specific requirements",
    image: "/assets/images/tec-container/hook-1.jpg",
  },
  {
    title: "Coil Handlers",
    caption:
      "The top-selling solution that effortlessly transforms a standard forklift truck into a robust coil handling machine. It enables loading and unloading coils at various angles without requiring movement from the forklift truck. This design reduces both the number of necessary movements and risks for the driver and ground staff alike.",
    image: "/assets/images/tec-container/coil-handlers.png",
  },
  {
    title: "Fixed coil handlers",
    caption:
      "Featuring single, double, triple, and quadruple coil holders designed to streamline handling operations. These handlers optimize the loading and unloading processes, reducing cycle times and enhancing operational efficiency. They provide a safe handling solution while minimizing costs. Customize the Safe Working Load (SWL) and main dimensions to precisely match your requirements.",
    image: "/assets/images/tec-container/fixed-coil-handlers.png",
  },
  {
    title: "Special Forks and Clamps",
    caption:
      "Designed to enhance the capabilities of your forklift truck with wider, higher, or stronger options. Choose from double, triple, and quadruple forks with telescopic or fixed movements to handle various tasks. These specialized models excel in loading and unloading items like iron and steel rods, slabs, wires, and more, ensuring efficient material handling operations.",
    image: "/assets/images/tec-container/forks-and-clamps.jpg",
  },
  {
    title: "Boat handling forks",
    caption:
      "a comprehensive range of attachments tailored for boat handling tasks. Lift small boats using nylon sleeves on the forks, or opt for sophisticated attachments designed for larger boats. These advanced options include features such as negative elevation for easy loading and releasing from the water, hydraulic opening mechanisms for lifting from below, and customizable Safe Working Load (SWL) and length to suit specific requirements.",
    image: "/assets/images/tec-container/boat-handling-forks.png",
  },
  {
    title: "Container Handling Forks",
    caption:
      "Equipped with a spreader designed for efficiently handling 20ft and 40ft ISO containers. These forks feature a mechanical latching system to securely attach the spreader, forklift pockets customized to customer specifications, and security pins ensuring a safe connection between twist locks and containers. The Safe Working Load (SWL) is adjustable to meet diverse customer requirements.",
    image: "/assets/images/tec-container/boat-handling-forks.png",
  },
];

export const tecContainerLashingCages: ProductDetailsProps[] = [
  {
    title: "Gondola Safety Cage /Lashing Cage BA-323T",
    caption:
      "Conveniently deliverable within a 40ft FCL (Full Container Load), designed to accommodate up to two stevedores with complete equipment per cabin. The cabin features guardrails and handrails along its entire perimeter, ensuring comprehensive safety. All doors for stevedores open inwards and are equipped with hinges featuring springs, autoclose, and autolock systems for added convenience and security. The anti-slip floor includes drainage spots, while two anchor points per cabin, compliant with EN795 standards, are strategically placed behind working positions to ensure fall protection. Suitable for temperatures as low as -20ºC and relative humidity up to 100%, it also features a raised floor to prevent entrapment.",
    image: "/assets/images/tec-container/gondola-safety-cage.png",
  },
  {
    title: "Safety Cage Under Spreader BA-185",
    caption:
      "Designed for up to four persons with complete working equipment. It features a 2100mm internal height and perimeter safety railings, along with internal handholds for added security. Doors open inward with hinges equipped for autoclose and autolock functionality. The cage includes a dual safety system: automatic using spreader twistlocks and manual with internal chains. It boasts an anti-slip floor with drainage, eight fall protection anchor points, and a roof covering most areas, except corners for easy spreader connection. Chamfered corners facilitate twistlock unlashing, ensuring efficient cargo handling.",
    image: "/assets/images/tec-container/safety-cage-under-spreader.png",
  },
];
export const dafoVehicleFireProtection: ProductDetailsProps[] = [
  {
    title: "Buses",
    caption:
      "Ensure passenger safety with Dafo's rapid-response fire suppression systems, designed to quickly control and extinguish fires in transit.",
    image: "/assets/images/dafo-bus.png",
  },
  {
    title: "Mining Machinery",
    caption:
      "Protect your valuable mining equipment from the hazards of fire with Dafo's robust and reliable extinguishing solutions, minimizing downtime and maximizing safety.",
    image: "/assets/images/dafo-mining.png",
  },
  {
    title: "Construction Equipment",
    caption:
      "Shield your construction machinery from fire risks with Dafo's advanced suppression systems, providing fast and effective protection to keep your projects on track.",
    image: "/assets/images/dafo-construction.png",
  },
  {
    title: "Material Handling",
    caption:
      "Secure your material handling operations with Dafo's efficient fire suppression systems, offering swift and reliable fire control to protect assets and personnel.",
    image: "/assets/images/dafo-material-handling.png",
  },
];
export const mantsinenProducts: ProductDetailsProps[] = [
  {
    title: "Material Handlers",
    caption:
      "Enhance your operations with Mantsinen’s robust and efficient material handlers, designed for maximum productivity and reliability in various applications.",
    image: "/assets/images/material-handlers.jpg",
  },
  {
    title: "Attachments",
    caption:
      "Optimize versatility and performance with Mantsinen’s high-quality attachments, engineered to meet diverse material handling needs.",
    image: "/assets/images/mantsinen-attachments.png",
  },
  {
    title: "Log Handlers",
    caption:
      "Streamline your log handling processes with Mantsinen’s powerful and precise log handlers, ensuring safe and efficient operations in demanding environments.",
    image: "/assets/images/log-handlers.jpg",
  },
];
export const actiwProducts: ProductDetailsProps[] = [
  {
    title: "Container Loading for Wood Products",
    caption:
      "Maximize efficiency and minimize damage with LoadPlate's seamless container loading for wood products, ensuring safe and quick operations.",
    image: "/assets/images/actiw-steel.png",
  },
  {
    title: "Container Loading for Steel Products",
    caption:
      "Enhance safety and productivity in your steel product shipments with LoadPlate, providing reliable and cost-effective container loading solutions.",
    image: "/assets/images/actiw-wood.png",
  },
];
