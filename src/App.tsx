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

function App() {  

  return (
    <>
    <Header companyName="Ácstetőfedő.hu" logo="assets/logo.png"></Header>
    <main>
      <Jumbotron></Jumbotron>
      <Services></Services>
      <ServicesExplained></ServicesExplained>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <References></References>
      <CompanyInfo></CompanyInfo>
    </main>

    <Footer></Footer>
    </>
  );
}

export default App;
