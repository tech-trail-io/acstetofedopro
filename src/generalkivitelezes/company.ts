import {
  AboutUsItem,
  CompanyInfo,
  Service,
  ServiceExplain,
  Testimonial,
} from '../company.interface';

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

const services: Service[] = [
  {
    icon: 'assets/services/roof-construction-icon.png',
    title: 'Tetők',
    text: 'Minőségi tetőfedés és javítás, modern és hagyományos anyagokkal egyaránt.',
  },
  {
    icon: 'assets/services/renovation-icon.png',
    title: 'Felújítás',
    text: 'Teljes körű felújítási munkálatok, a tervezéstől a kivitelezésig.',
  },
  {
    icon: 'assets/services/general-execution-icon.png',
    title: 'Generálkivitelezés',
    text: 'A projekt kezdetétől a kulcsrakész átadásig, minden építési szakaszban.',
  },
  {
    icon: 'assets/services/hangar-construction-icon.png',
    title: 'Csarnoképítés',
    text: 'Ipari és mezőgazdasági csarnokok tervezése és építése, magas szakmai színvonalon.',
  },
];

const servicesExplained: ServiceExplain[] = [
  {
    image: 'assets/services/roof-construction.jpg',
    title: 'Tetők',
    text: `Minőségi tetőfedés és javítás, modern és hagyományos anyagokkal
  egyaránt. Gondoskodunk arról, hogy otthona vagy vállalkozása
  tetője időjárás álló és esztétikus legyen.`,
    moreInfo: 'More info',
  },
  {
    image: 'assets/services/renovation.jpg',
    title: 'Felújítás',
    text: ` Teljes körű felújítási munkálatok, a tervezéstől a kivitelezésig.
    Profi csapatunk garantálja, hogy ingatlana megújuljon és értéke
    növekedjen.`,
    moreInfo: 'More info',
  },
  {
    image: 'assets/services/general-execution.jpeg',
    title: 'Generálkivitelezés',
    text: `A projekt kezdetétől a kulcsrakész átadásig, minden építési
    szakaszban. Szakértelmünkkel és tapasztalatunkkal biztosítjuk
    projektje sikerét.`,
    moreInfo: 'More info',
  },
  {
    image: 'assets/services/hangar-construction.png',
    title: 'Csarnoképítés',
    text: ` Ipari és mezőgazdasági csarnokok tervezése és építése, magas
    szakmai színvonalon. Megbízható kivitelezés, tervezéstől a
    megvalósulásig.`,
    moreInfo: 'More info',
  },
];

const aboutUs: AboutUsItem[] = [
  {
    text: `Cégünk több évtizedes szakmai tapasztalattal rendelkezik a
    tetőépítés és felújítás területén. Elkötelezettek vagyunk az
    innováció és a hagyományok ötvözése mellett.`,
    title: 'Történelmünk',
  },
  {
    text: ` Célunk, hogy biztosítsuk ügyfeleink számára a legmagasabb minőségű
    szolgáltatást, miközben fenntartható megoldásokat kínálunk a tetők
    építésére és karbantartására.`,
    title: 'Küldetésünk',
  },
  {
    text: `Szakértelem, megbízhatóság és ügyfélközpontúság jellemzi
    munkánkat. Büszkék vagyunk arra, hogy ügyfeleink bizalmát hosszú
    távon élvezzük.`,
    title: 'Értékeink',
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
  services,
  servicesExplained,
  aboutUs,
};
