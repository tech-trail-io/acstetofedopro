import '../index.css';
import Header from '../shared/header/Header';
import Jumbotron from '../shared/main/Jumbotron';
import Services from '../shared/main/Services';
import ServicesExplained from '../shared/main/ServicesExplained';
import Testimonials from '../shared/main/Testimonials';
import Contact from '../shared/main/Contact';
import References from '../shared/main/References';
import CompanyInfo from '../shared/main/CompanyInfo';
import Footer from '../shared/footer/Footer';
import { Company } from './company';
import { Carousel, CarouselSlide } from '../shared/carousel/Carousel';

function App() {
  const { companyName, phone, email, logo, socialMedia, title, testimonials } = Company;

  return (
    <>
    <Header companyName={companyName} logo={logo}></Header>
    <main>
      <Jumbotron title={title}></Jumbotron>
      <Services></Services>
      <ServicesExplained></ServicesExplained>
      <Testimonials testimonials={testimonials}></Testimonials>
      <Contact></Contact>
      <References></References>
      <CompanyInfo></CompanyInfo>
    </main>

    <Footer companyName={companyName} phone={phone} email={email} socialMedia={socialMedia}></Footer>
    </>
  );
}

export default App;
