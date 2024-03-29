import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Carousel(props: any) {
  const swiperRef: any = useRef(null);
  const { children, ...rest } = props;

  useEffect(() => {
    register();
    const params = {
      ...rest,
    };
    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      init={true}
      ref={swiperRef}
    >
      {children}
    </swiper-container>
  );
}

export function CarouselSlide(props: any) {
  const { children, ...rest } = props;

  return (
    <swiper-slide key={Date.now} {...rest}>
      {children}
    </swiper-slide>
  );
}
