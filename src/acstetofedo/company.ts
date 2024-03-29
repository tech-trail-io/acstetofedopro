import { AboutUsItem } from '../company.interface';
import {
  CompanyInfo,
  Service,
  ServiceExplain,
  Testimonial,
} from '../company.interface';

const companyName = 'Ácstetőfedő.hu';
export const testimonials: Testimonial[] = [
  {
    name: 'Gábor',
    picture: '/assets/reviews/review-1.webp',
    rate: 4.5,
    review: `Az ${companyName} csapata rendkívül profi és tapasztalt, munkájuk precíz és megbízható. Minden lépést gondosan végrehajtottak, és a végeredmény egyszerűen lenyűgöző volt. Bátran ajánlom őket minden tetőfedési feladathoz.`,
  },
  {
    name: 'Erika',
    picture: '/assets/reviews/review-2.webp',
    rate: 4.5,
    review:
      'A tetőm újra tökéletes állapotban van, köszönöm a gyors és hatékony munkát.',
  },
  {
    name: 'Dávid',
    picture: '/assets/reviews/review-3.webp',
    rate: 5,
    review:
      `Nagyon elégedettek vagyunk a ${companyName}-val, mert nemcsak hogy gyorsan reagáltak a kérésünkre, de a munkájuk minősége is kiemelkedő volt. Rugalmasak voltak az időpontokat illetően, és a csapat teljes szívvel a munkájába fektette magát, hogy a tetőnk újra tökéletes állapotba kerüljön.`,
  },
];

const services: Service[] = [
  {
    icon: 'assets/services/roof-construction-icon.png',
    title: 'Új tetők készítése',
    text: 'Kínálunk bármilyen típusú tetőszerkezetek készítését és fedését, legyen szó új építésű ingatlanokról vagy meglévő struktúrák bővítéséről.',
  },
  {
    icon: 'assets/services/renovation-icon.png',
    title: 'Régi tetők felújítása',
    text: 'Specializálódunk felújításra váró tetők javítására, megerősítésére és esetleges cseréjére, hogy hosszú távon is biztonságosak és esztétikusak maradjanak.',
  },
  {
    icon: 'assets/services/car-garage.png',
    title: 'Féltetők és kocsibeállók építése',
    text: 'Egyedi tervezésű féltetők és kocsibeállók építését vállaljuk, gyalult fa kivitelben, hogy tökéletesen illeszkedjenek otthona stílusához.',
  },
  {
    icon: 'assets/services/roof-gutter.png',
    title: 'Bádogozási munkák',
    text: 'Teljes körű bádogozási szolgáltatásokat nyújtunk, beleértve a komplett lemezfedéseket, ereszcsatornák, szegélyezések és élhajlítások készítését.',
  },
];

const servicesExplained: ServiceExplain[] = [
  {
    image: 'assets/services/roof-construction.jpg',
    title: 'Új tetők építése',
    text: `Minőségi tetőfedés és javítás, modern és hagyományos anyagokkal
  egyaránt. Gondoskodunk arról, hogy otthona vagy vállalkozása
  tetője időjárás álló és esztétikus legyen.`,
    moreInfo: 'More info',
  },
  {
    image: 'assets/services/roof-renovation.webp',
    title: 'Régi tetők felújítása javítása',
    text: ` Teljes körű felújítási munkálatok, a tervezéstől a kivitelezésig.
    Profi csapatunk garantálja, hogy ingatlana megújuljon és értéke
    növekedjen.`,
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

export const Company: CompanyInfo = {
  companyName: companyName,
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
  services,
  servicesExplained,
  aboutUs,
};
