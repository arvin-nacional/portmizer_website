export interface SidebarLink {
  imgURL: string;
  label: string;
  route: string;
}

export interface MobileNavLinks {
  link: string;
  title: string;
}

export interface TestimonialsProps {
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

interface ProductDetailsProps {
  image: string;
  title: string;
  caption: string;
}

interface LogoProps {
  src: string;
  alt: string;
}

interface CareerOpeningsProps {
  title: string;
  caption: string;
  location: string;
  type: string;
  department: string;
}

interface HiringProcessProps {
  title: string;
  caption: string;
  image: string;
}
interface LocationProps {
  location: string;
  address: string;
  number: string;
}

interface GalleryImages {
  src: string;
  alt: string;
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface ParamsProps {
  params: { id: string };
}

export interface RelatedPostsProps {
  tagIds: ObjectId[];
  currentPostId: string;
}

interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}
