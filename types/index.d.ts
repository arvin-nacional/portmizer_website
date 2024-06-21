export interface SidebarLink {
  imgURL: string;
  label: string;
  route: string;
}

export interface MobileNavLinks {
  link: string;
  title: string;
}

export interface Testimonials {
  testimonialThumb: string;
  testimonialText: string;
  avatarName: string;
  avatarDesignation: string;
  ratings: string;
}

interface coreValuesProps {
  image: string;
  title: string;
  caption: string;
}
interface ProductCardProps {
  image: string;
  title: string;
  caption: string;
  link: string;
}

interface LogoProps {
  src: string;
  alt: string;
}
