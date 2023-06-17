import { ReactElement, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
// @ts-ignore
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TitleReadMore } from './TitleReadMore';
import { Project } from '../Projects/types/Project';

type CarouselProps = {
  items: Project[];
};
export const MyCarousel = ({ items }: CarouselProps): ReactElement => {
  const [imgIndex, setImgIndex] = useState(0);
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    className: 'py-10 mt-10',
    // slidesToShow: 5,
    centerMode: true,
    // @ts-ignore
    beforeChange: (current, next) => setImgIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-10/12 md:w-[80%] pb-8 pt-[80px] mx-auto">
        <TitleReadMore text="projects " link="projects" />
        <Slider {...settings}>
          {items.map((item, index) => (
            <div
              onClick={() => router.push(`projects/${item.title}`)}
              key={index}
              className={`!w-[70%] cursor-pointer
               bg-white mx-auto text-center transition-transform duration-700 ${
                 index === imgIndex
                   ? 'scale-x-[1.6] pb-20 pt-20 scale-y-[1.5] opacity-100'
                   : 'scale-x-[1.1] pb-6 pt-8 scale-y-[1.1] opacity-40 '
               }
              `}
            >
              <div
                className="px-10 border-red-600 w-[90%] rounded-xl bg-red-100 h-[180px]
               flex justify-center items-center mx-auto"
              >
                <Image
                  className="w-full h-full"
                  width={380}
                  height={474}
                  src={`data:${item?.images[0].contentType};base64,${item?.images[0].data}`}
                  alt="image"
                />
              </div>
              <p className="text-black font-medium mt-1">{item.title}</p>
              <div className="text-black flex justify-between mx-4 mt-3 text-xs">
                <span>1402</span>
                <span>more</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
