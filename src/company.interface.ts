export interface SocialMedia {
  title: string;
  link: string;
}

export interface Testimonial {
  name: string;
  picture: string;
  rate: number;
  review: string;
}
export interface Service {
  icon: string;
  title: string;
  text: string;
}

export interface ServiceExplain {
  image: string;
  title: string;
  text: string;
  moreInfo: string;
}
export interface AboutUsItem {
  title: string;
  text: string;
  icon: string;
}

export interface ReferenceImage {
  src: string;
  caption: string;
}

export interface Reference {
  description: string;
  images: ReferenceImage[];
}

export interface CompanyInfo {
  companyName: string;
  phone: string;
  email: string;
  logo: string;
  socialMedia: SocialMedia[];
  title: string;
  testimonials: Testimonial[];
  services: Service[];
  servicesExplained: ServiceExplain[];
  aboutUs: AboutUsItem[];
  ourStory: string;
  references: Reference[];
}
