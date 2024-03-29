import {
  AboutUsItem,
  CompanyInfo,
  Reference,
  Service,
  ServiceExplain,
  Testimonial,
} from '../company.interface';

export const testimonials: Testimonial[] = [
  {
    name: 'János',
    picture: 'assets/reviews/review-1.webp',
    rate: 4.5,
    review:
      'Nagyon elégedett vagyok a szolgáltatással, a munka gyors és szakszerű volt. Mindenkinek ajánlom!',
  },
  {
    name: 'Erika',
    picture: 'assets/reviews/review-2.webp',
    rate: 4.5,
    review:
      'A tetőm újra tökéletes állapotban van, köszönöm a gyors és hatékony munkát.',
  },
  {
    name: 'Péter',
    picture: 'assets/reviews/review-3.webp',
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
    icon: 'assets/about-us/history.png',
  },
  {
    text: ` Célunk, hogy biztosítsuk ügyfeleink számára a legmagasabb minőségű
    szolgáltatást, miközben fenntartható megoldásokat kínálunk a tetők
    építésére és karbantartására.`,
    title: 'Küldetésünk',
    icon: 'assets/about-us/high-quality.png',
  },
  {
    text: `Szakértelem, megbízhatóság és ügyfélközpontúság jellemzi
    munkánkat. Büszkék vagyunk arra, hogy ügyfeleink bizalmát hosszú
    távon élvezzük.`,
    title: 'Értékeink',
    icon: 'assets/about-us/precise.png',
  },
];

const ourStory = `1995-ben készítettem el első munkámat ács-tetőfedő vállalkozóként. Az azóta eltelt közel 30 év alatt az ország szinte minden pontján megfordultam és ott hagytam szakmai “lábnyomomat” kisebb-nagyobb beruházásokban a megrendelők elégedettségére. Az utóbbi években túlnyomórészt lakóhelyem 100 kilométeres körzetében dolgozom.
Időközben családi vállalkozássá bővültünk, fiam kitanulta a bádogos szakmát. Ács-tetőfedő-bádogos  munkák kivitelezése semmilyen szinten nem okoz problémát, az egyszerűbb, kisebb megbízásoktól, a legbonyolultabb, több száz négyzetméteresig. 
Árajánlatot mindig személyes megbeszélés, elkészült tervek alapján készítünk, részletesen, mindenre kiterjedően, ingyenesen.
Elszámolás mindig az adott munkafolyamat elkészülte után történik, a megrendelő által elfogadott árajánlat alapján.
Az elmúlt 30 év rengeteg referencia munkát eredményezett, melyeket olyan formában bocsátok az érdeklődők részére, hogy konkrét elkészült munkák címét és a megrendelők nevét, telefonszámát adom meg, ahol személyesen lehet informálódni az elkészített munkák minőségéről.`;

const references: Reference[] = [
  {
    description: 'Ide jön egy referencia munka leírása',
    images: [
      {
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-700.jpg',
        caption: 'ez egy város',
      },
      {
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-700.jpg',
        caption: 'ez egy hegy',
      },
      {
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-700.jpg',
        caption: 'ez is egy hegy',
      },
      {
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-700.jpg',
        caption: 'meg ez is',
      },
    ],
  },
  {
    description: 'Ide jön egy másik referencia munka leírása',
    images: [
      {
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-700.jpg',
        caption: 'ez egy város',
      },
      {
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-700.jpg',
        caption: 'ez egy hegy',
      },
      {
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-700.jpg',
        caption: 'ez is egy hegy',
      },
      {
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-700.jpg',
        caption: 'meg ez is',
      },
    ],
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
  ourStory,
  references,
};
