import './ReferenceItem.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Carousel, CarouselSlide } from '../carousel/Carousel';
import { useState } from 'react';
import { ReferenceImage } from '../../company.interface';

function ReferenceItem({ images }: Readonly<{ images: ReferenceImage[] }>) {
  const [swiper, setSwiper] = useState();

  return (
    <>
      {swiper ? (
        <Carousel
          className="swiper gallery"
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper: swiper,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {images.map(({ src, caption }, index) => (
            <CarouselSlide className="swiper-slide" key={index}>
              <a
                href={src}
                target="_blank"
              >
                <img src={src} />
              </a>
              <div style={{ backgroundColor: 'black', color: 'white' }}>
                {caption}
              </div>
            </CarouselSlide>
          ))}
        </Carousel>
      ) : (
        ''
      )}
      <Carousel
        className="swiper"
        onInit={(thumbSwiper: any) => setSwiper(thumbSwiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
      >
        {images.map(({ src }, index) => (
          <CarouselSlide className="swiper-slide" key={index}>
            <img src={src} />
          </CarouselSlide>
        ))}
      </Carousel>
    </>
  );
}

export default ReferenceItem;
