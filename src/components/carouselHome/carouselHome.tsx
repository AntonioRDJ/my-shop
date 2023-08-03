"use client"
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

type Slide = {
  id: string,
  imageUrl?: string,
};

type CarouselHomeProps = {
  slides: Slide[], 
};

export const CarouselHome = ({ slides }: CarouselHomeProps) => {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className='min-h-[12rem]'>
            {slide.id}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
