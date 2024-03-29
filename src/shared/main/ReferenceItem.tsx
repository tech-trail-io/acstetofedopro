import './ReferenceItem.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Carousel, CarouselSlide } from '../carousel/Carousel';
import { useState } from 'react';

function ReferenceItem() {
  const [swiper, setSwiper] = useState('swiper');
  const images = [
    {
      src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-700.jpg',
    },
    {
      src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-700.jpg',
    },
    {
      src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-700.jpg',
    },
    {
      src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-700.jpg',
    },
  ];

  return (
    <>
      <Carousel
        className="swiper"
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        thumbs={{
          swiper,
        }}
      >
        {images.map(({ src }, index) => (
          <CarouselSlide className="swiper-slide" key={index}>
            <img src={src} />
          </CarouselSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Carousel>
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
