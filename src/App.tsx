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
import { Gallery } from './gallery/Gallery';

function App() {
  const { companyName, phone, email, logo, socialMedia, title, testimonials } =
    Company;

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
        <Carousel
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 4 } }}
          on={{
            slideChange: () => console.log('slide changed'),
            progress: (s: any, progress: any) =>
              console.log(`progress is ${progress}`),
          }}
        >
          <CarouselSlide>Slide 1</CarouselSlide>
          <CarouselSlide>Slide 2</CarouselSlide>
          <CarouselSlide>Slide 3</CarouselSlide>
        </Carousel>
        <Gallery
          galleryID="project-gallery"
          images={[
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
              width: 1875,
              height: 2500,
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
              width: 1669,
              height: 2500,
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
              width: 2500,
              height: 1666,
            },
          ]}
        ></Gallery>
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
