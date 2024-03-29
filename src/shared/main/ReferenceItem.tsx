import './ReferenceItem.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Carousel, CarouselSlide } from '../carousel/Carousel';
import { useState } from 'react';

function ReferenceItem() {
  const [swiper, setSwiper] = useState();
  console.log(swiper);
  const images = [
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
  ];

  return (
    <>
      {swiper ? (
        <Carousel
          className="swiper"
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
              <img src={src} />
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
