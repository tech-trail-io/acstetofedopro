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

export interface CompanyInfo {
  companyName: string;
  phone: string;
  email: string;
  logo: string;
  socialMedia: SocialMedia[];
  title: string;
  testimonials: Testimonial[];
}
