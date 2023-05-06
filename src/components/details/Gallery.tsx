import { useLayoutEffect, useState } from 'react';

import Image from 'next/image';
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SwiperClass from 'swiper/types/swiper-class';

import { photos } from './Photos';

export function MyGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper] = useState<SwiperClass>();
  const [secondSwiper] = useState<SwiperClass>();
  // const swiper1Ref = useRef();
  // const swiper2Ref = useRef();

  useLayoutEffect(() => {
    // if (swiper1Ref.current) swiper1Ref.current.controller.control = swiper2Ref.current;
  }, []);

  return (
    <div className="w-[100%] ">
      <Swiper
        // onSwiper={(swiper) => {
        //   // if (swiper1Ref.current) swiper1Ref.current = swiper;
        // }}
        controller={{ control: secondSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="h-[350px] md:h-[460px] w-[100%] rounded-xl"
      >
        {photos.map((item, index) => (
          <SwiperSlide key={index} className="">
            <Image className="w-[100%] aspect-square" src={item.src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        controller={{ control: firstSwiper }}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        touchRatio={0.2}
        freeMode={true}
        lazy={true}
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, FreeMode, Thumbs, Controller]}
        className="h-[100px] mx-auto flex justify-center !w-[100%] cursor-pointer mt-[20px] rounded-xl"
      >
        {photos.map((item, index) => (
          <SwiperSlide key={index} className="!w-[20%] swiper-slide-auto">
            <Image className="rounded-xl h-[100px] " src={item.src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}