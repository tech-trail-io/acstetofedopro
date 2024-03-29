import { CompanyInfo, Testimonial } from '../company.interface';

export const testimonials: Testimonial[] = [
  {
    name: 'János',
    picture: '/path/to/profile-1.jpg',
    review:
      'Nagyon elégedett vagyok a szolgáltatással, a munka gyors és szakszerű volt. Mindenkinek ajánlom!',
  },
  {
    name: 'Erika',
    picture: '/path/to/profile-2.jpg',
    review:
      'A tetőm újra tökéletes állapotban van, köszönöm a gyors és hatékony munkát.',
  },
  {
    name: 'Péter',
    picture: '/path/to/profile-3.jpg',
    review:
      'Megbízható csapat, kiváló anyagokkal dolgoznak. A végeredmény minden várakozásomat felülmúlta.!',
  },
];

export const Company: CompanyInfo = {
  companyName: 'Ácstetőfedő.hu',
  phone: '+36 30 123 4567',
  email: 'info@acstetofedo.hu',
  logo: 'assets/logo.png',
  socialMedia: [
    { title: 'Facebook', link: '#' },
    { title: 'Instagram', link: '#' },
    { title: 'LinkedIn', link: '#' },
  ],
  title: 'Gyors és Megbízható Tetőfedés Veszprém megyében!',
  testimonials,
};
