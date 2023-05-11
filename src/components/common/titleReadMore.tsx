import { motion } from 'framer-motion';
import { BsChevronRight } from 'react-icons/bs';

export const TitleReadMore = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between w-full mx-auto mb-[55px]">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, repeatDelay: 0.5, duration: 1 }}
        className="text-yellow-400 text-2xl text-center pb-2  border-b-gray-200 border-b-2 "
      >
        {text}
      </motion.span>
      <div
        className="flex items-center cursor-pointer py-1  self-center border-yellow-400 border text-gray-200 px-2 text-lg
      rounded-xl  hover:bg-yellow-400 hover:text-black"
      >
        <button className="mr-1 tracking-[0.075em]"> more</button>
        <BsChevronRight />
      </div>
    </div>
  );
};
