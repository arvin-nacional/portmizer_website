import {
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

export const productsCard: ProductCardProps[] = [
  {
    link: "/products/cargotec-kalmar",
    title: "Kalmar Port and Terminal System",
    caption:
      "Kalmar offers a wide range of cargo handling solutions and services to ports, terminals, distribution centres and to heavy industry.",
    image: "/assets/images/home-product-image1.svg",
  },
  {
    link: "/products/sumitomo",
    title: "Sumitomo Rubber Industries",
    caption:
      "Kalmar offers a wide range of cargo handling solutions and services to ports, terminals, distribution centres and to heavy industry.",
    image: "/assets/images/home-product-image1.svg",
  },
  {
    link: "/products/mantsinen",
    title: "Mantsinen Mobile Harbor Crane",
    caption:
      "Kalmar offers a wide range of cargo handling solutions and services to ports, terminals, distribution centres and to heavy industry.",
    image: "/assets/images/home-product-image1.svg",
  },
  {
    link: "/products/tec-container",
    title: "Tec Container",
    caption:
      "Kalmar offers a wide range of cargo handling solutions and services to ports, terminals, distribution centres and to heavy industry.",
    image: "/assets/images/home-product-image1.svg",
  },
  {
    link: "/products/actiw-loadplate",
    title: "Actiw Loadplate",
    caption:
      "Kalmar offers a wide range of cargo handling solutions and services to ports, terminals, distribution centres and to heavy industry.",
    image: "/assets/images/home-product-image1.svg",
  },
  {
    link: "/products/dafo",
    title: "Dafo Vehicle Fire Protection",
    caption:
      "Kalmar offers a wide range of cargo handling solutions and services to ports, terminals, distribution centres and to heavy industry.",
    image: "/assets/images/home-product-image1.svg",
  },
];
