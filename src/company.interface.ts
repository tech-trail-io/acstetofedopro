export interface SocialMedia {
  title: string;
  link: string;
}

export interface CompanyInfo {
  companyName: string;
  phone: string;
  email: string;
  logo: string;
  socialMedia: SocialMedia[];
}
