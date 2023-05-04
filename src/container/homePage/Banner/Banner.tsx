import Image from 'next/image';

import mehdi from '../../../../public/assets/images/mehdi8.png';

export const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-[80%] mt-20 w-[90%] mx-auto justify-center md:justify-between items-center">
      <div className="flex flex-col items-center md:items-start">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <span className="text-md">Hello i'm</span>
        <span className="text-4xl font-bold">Mehdi zarei</span>
        <span className="text-xl mt-2">React Developer</span>
        <button className="border border-white/70 rounded-lg mt-8 py-2 w-[140px] hover:bg-white/20 transition-all">
          More Info
        </button>
      </div>
      <div className="w-[80%] md:w-[28%] mx-auto md:mx-0 mt-5 md:mt-0  ">
        <Image src={mehdi} alt="mehdi" />
      </div>
    </div>
  );
};
