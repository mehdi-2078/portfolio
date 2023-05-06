import Image from 'next/image';

import mehdi from '../../../../public/assets/images/mehdi8.png';

export const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-[80%] w-[90%] mx-auto justify-center md:justify-between items-center">
      <div className="flex flex-col items-center md:items-start">
        <span className="text-5xl text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300">
          Hello i&apos;m
        </span>
        <span className="text-6xl font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Mehdi zarei
        </span>
        <span className="text-3xl mt-2 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">
          React Developer
        </span>
        <button className="border text-xl border-white/70 rounded-lg mt-8 py-2 w-[140px] hover:bg-white/20 transition-all">
          More Info
        </button>
      </div>
      <div className="w-[80%] md:w-[28%] mx-auto md:mx-0 mt-5 md:mt-20  ">
        <Image src={mehdi} alt="mehdi" />
      </div>
    </div>
  );
};
