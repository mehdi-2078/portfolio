import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface Item {
  key: number;
  src: string | StaticImageData;
  title: string;
}
interface Props {
  items: Item[];
}

export const SkillItem: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.key}
          className="flex item-centers mx-3 my-2 flex-col text-center px-7 pt-4
           justify-around shadow-2xl w-[130px] h-[130px] rounded"
        >
          <Image src={item.src} alt="" />
          <span className="text-xl mt-2">{item.title}</span>
        </div>
      ))}
    </>
  );
};
