import { CompanyInfo, Testimonial } from '../company.interface';

export const testimonials: Testimonial[] = [
  {
    name: 'János',
    picture: '/assets/reviews/review-1.webp',
    rate: 4.5,
    review:
      'Nagyon elégedett vagyok a szolgáltatással, a munka gyors és szakszerű volt. Mindenkinek ajánlom!',
  },
  {
    name: 'Erika',
    picture: '/assets/reviews/review-2.webp',
    rate: 4.5,
    review:
      'A tetőm újra tökéletes állapotban van, köszönöm a gyors és hatékony munkát.',
  },
  {
    name: 'Péter',
    picture: '/assets/reviews/review-3.webp',
    rate: 5,
    review:
      'Megbízható csapat, kiváló anyagokkal dolgoznak. A végeredmény minden várakozásomat felülmúlta.!',
  },
];

export const Company: CompanyInfo = {
  companyName: 'Generálkivitelezés.hu',
  phone: '+36 30 123 4567',
  email: 'info@generalkivitelezes.hu',
  logo: 'assets/logo.png',
  socialMedia: [
    { title: 'Facebook', link: '#' },
    { title: 'Instagram', link: '#' },
    { title: 'LinkedIn', link: '#' },
  ],
  title: 'Gyors és Megbízható Generálkivizetlezés Veszprém megyében!',
  testimonials,
};
