import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { BsTools, BsProjector } from 'react-icons/bs';
import { MdMenu, MdClose, MdOutlineInfo, MdOutlinePermContactCalendar } from 'react-icons/md';

export const Header = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <div className="shadow-2xl fixed z-20 pt-6 pb-4 w-[100%]">
      <div className="flex md:w-[80%] left-[10%] flex-wrap w-[90%] mx-auto justify-between">
        <motion.div
          className="bg-transparent  bg-gradient-to-r from-purple-800 to-pink-500 flex relative w-[50px] rounded-l-md"
          initial={{ width: 30 }}
          animate={{ width: 90 }}
          transition={{ repeat: Infinity, repeatDelay: 1, duration: 2.5 }}
        >
          <p className="text-xl  font-semibold w-[150px] absolute pl-2">Mehdi Zarei</p>
        </motion.div>
        {/* desktop nav */}
        <nav className="hidden space-x-2 md:flex w-1/4 shadow-2xl ">
          <a className="text-md hover:bg-white/25 py-1 px-2 rounded	cursor-pointer transition-all">
            About
          </a>
          <a className="text-md hover:bg-white/25 py-1 px-2 rounded	cursor-pointer transition-all">
            Skills
          </a>
          <a className="text-md hover:bg-white/25 py-1 px-2 rounded	cursor-pointer transition-all">
            Projects
          </a>
          <a className="text-md hover:bg-white/25 py-1 px-2 rounded	cursor-pointer transition-all">
            Contact
          </a>
        </nav>

        {/* nav icons */}
        {nav ? (
          <MdClose className=" text-3xl z-50 md:hidden" aria-hidden="true" onClick={showNav} />
        ) : (
          <MdMenu className=" text-3xl z-50 md:hidden" aria-hidden="true" onClick={showNav} />
        )}

        {/* mobile nav */}
        <nav
          className={`h-[100vh] fixed top-[0px] flex flex-col justify-evenly items-center w-full md:hidden bg-black z-40 duration-1000 ${
            nav ? 'right-[0px]' : 'right-[-100vw]'
          } `}
        >
          <a className="flex space-x-2 items-center menu-item text-center">
            <span>About</span>
            <MdOutlineInfo size={18} />
          </a>
          <a className="flex space-x-2 items-center menu-item text-center">
            <span>Skills</span>
            <BsTools />
          </a>
          <a className="flex space-x-2 items-center menu-item text-center">
            <span>Projects</span>
            <BsProjector size={20} />
          </a>
          <a className="flex space-x-2 items-center menu-item text-center">
            <span>Contact</span>
            <MdOutlinePermContactCalendar size={20} />
          </a>
        </nav>
      </div>
    </div>
  );
};
