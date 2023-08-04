"use client"
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import Image from 'next/image';
import { formatPrice } from '@/app/utils/formatPrice';

type Slide = {
  id: string | number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
};

type CarouselHomeProps = {
  slides: Slide[], 
};

export const CarouselHome = ({ slides }: CarouselHomeProps) => {

  return (
    <Swiper
      className='mySwiper'
      spaceBetween={50}
      slidesPerView={3}
      slidesPerGroup={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination, A11y]}
      pagination={{ clickable: true }}
      loop={true}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className='relative flex flex-col'>
            <div className='relative w-72 h-72'>
              <Image className='object-cover' src={slide.thumbnail} alt={slide.title} fill quality={100} />
            </div>
            <div className='flex flex-col'>
              <h6 className='text-2xl text-zinc-900'>{slide.title}</h6>
              <p className='text-sm font-bold text-slate-500 line-through'>{formatPrice(slide.price * ((100 - slide.discountPercentage)/100))}</p>
              <h6 className='text-2xl font-bold text-zinc-900'>{formatPrice(slide.price)}</h6>
              <p className='text-sm text-green-500 font-semibold'>({slide.discountPercentage}% off)</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
