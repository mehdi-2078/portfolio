import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

import mehdi from '../../../../public/assets/images/mehdi8.png';
import { SocialNetWork } from '../../../components';

export const Banner = () => {
  return (
    <div
      className="flex mt-24 md:mt-0 overflow-hidden max-h-[92vh] flex-col md:flex-row md:w-[80%]
    w-[90%] mx-auto justify-center md:justify-between items-center"
    >
      <motion.div className="flex flex-col items-center md:items-start">
        <motion.span
          // initial={{ x: '-100vw', opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.5 }}
          className=" text-4xl md:text-5xl text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300"
        >
          Hello i&apos;m
        </motion.span>
        <motion.h1
          // initial={{ x: '-100vw', opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.7 }}
          className=" text-5xl md:text-6xl font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r
          from-purple-400 to-pink-600"
        >
          Mehdi Zarei
        </motion.h1>
        <motion.span
          // initial={{ x: '-100vw', opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl mt-2 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200"
        >
          <TypeAnimation
            sequence={[
              'Mern stack ',
              1000,
              'React js',
              1000,
              'Next js',
              1000,
              'React native',
              1000,
              'Express js',
              1000,
            ]}
            repeat={Infinity}
          />
        </motion.span>
        <motion.div
          // initial={{ x: '-100vw', opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.8 }}
          // className="border text-lg md:text-xl border-white/70 rounded-lg mt-8 py-2 w-[120px]  hover:bg-white/20 transition-all"
          className=" mt-12"
        >
          <SocialNetWork />
        </motion.div>
      </motion.div>
      <motion.div
        // initial={{ scale: 0.2, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        // transition={{ duration: 0.8 }}
        className="w-[80%] md:w-[28%] mx-auto md:mx-0 mt-5 md:mt-20  "
      >
        <Image priority={true} src={mehdi} alt="mehdi" />
      </motion.div>
    </div>
  );
};
