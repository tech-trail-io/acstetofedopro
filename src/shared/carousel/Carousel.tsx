import { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { register } from 'swiper/element/bundle';
import 'photoswipe/style.css';

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

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '.gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.on('beforeOpen', () => {
      const pswp = lightbox.pswp;
      const ds = pswp?.options?.dataSource;
      if (!ds) {
        return;
      }

      const items = Array.isArray(ds) ? ds : ds.items;
      if (items) {
        for (let idx = 0, len = items.length; idx < len; idx++) {
          const imageItem = (items[idx] as HTMLElement).querySelector<HTMLImageElement>('img')!;
          const img = new Image();
          img.onload = () => {
            (items[idx] as HTMLElement).setAttribute('data-pswp-width', img.naturalWidth + 'px');
            (items[idx] as HTMLElement).setAttribute('data-pswp-height', img.naturalHeight + 'px');
            pswp?.refreshSlideContent(idx);
          };
          img.src = imageItem.src;
        }
      }
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      (lightbox as PhotoSwipeLightbox | null) = null;
    };
  }, []);

  return (
    <swiper-container className="swiper-container" init="false" ref={swiperRef}>
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
