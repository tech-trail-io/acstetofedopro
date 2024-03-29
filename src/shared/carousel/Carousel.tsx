import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

export function Carousel(props: any) {
  const swiperRef: any = useRef(null);
  const { children, onInit, ...rest } = props;

  useEffect(() => {
    register();
    const params = {
      ...rest,
    };
    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
    onInit?.(swiperRef.current);
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
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
