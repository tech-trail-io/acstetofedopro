import './index.css';
import Header from './header/Header';
import Jumbotron from './main/Jumbotron';
import Services from './main/Services';
import ServicesExplained from './main/ServicesExplained';
import Testimonials from './main/Testimonials';
import Contact from './main/Contact';
import References from './main/References';
import CompanyInfo from './main/CompanyInfo';
import Footer from './footer/Footer';
import { Company } from './company';
import { Carousel, CarouselSlide } from './carousel/Carousel';

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
