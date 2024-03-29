import '../index.css';
import Header from '../shared/header/Header';
import Jumbotron from '../shared/main/Jumbotron';
import Services from '../shared/main/Services';
import ServicesExplained from '../shared/main/ServicesExplained';
import Testimonials from '../shared/main/Testimonials';
import Contact from '../shared/main/Contact';
import References from '../shared/main/References';
import CompanyInfo from '../shared/main/AboutUs';
import Footer from '../shared/footer/Footer';
import { Company } from './company';

function App() {
  const {
    companyName,
    phone,
    email,
    logo,
    socialMedia,
    title,
    testimonials,
    services,
    servicesExplained,
    aboutUs,
  } = Company;

  return (
    <>
      <Header companyName={companyName} logo={logo}></Header>
      <main>
        <Jumbotron title={title}></Jumbotron>
        <Services services={services}></Services>
        <ServicesExplained
          servicesExplained={servicesExplained}
        ></ServicesExplained>
        <CompanyInfo aboutUs={aboutUs}></CompanyInfo>
        <Testimonials testimonials={testimonials}></Testimonials>
        <References></References>
        <Contact></Contact>
      </main>

      <Footer
        companyName={companyName}
        phone={phone}
        email={email}
        socialMedia={socialMedia}
      ></Footer>
    </>
  );
}

export default App;
