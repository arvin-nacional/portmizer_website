import {
  LogoProps,
  MobileNavLinks,
  ProductCardProps,
  SidebarLink,
  Testimonials,
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
    link: "/products/cargotec-kalmar",
    title: "Cargotec-Kalmar",
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
    link: "/company/News and Updates",
    title: "News and Updates",
  },
  {
    link: "/company/Careers",
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

export const testimonialData: Testimonials[] = [
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
    link: "/products/cargotec-kalmar",
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
