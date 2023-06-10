import React, { useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdMenu, MdClose } from 'react-icons/md';

import { NavBarItems } from '../index';

export const Header = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  const router = useRouter();
  return (
    <div className="shadow-2xl bg-black/40 fixed z-20 pt-6 pb-4 w-[100%]">
      <div className="flex md:w-[80%] left-[10%] flex-wrap w-[90%] mx-auto ">
        <motion.div
          className="bg-transparent bg-gradient-to-r from-purple-800 to-pink-500 flex relative w-[50px] rounded-l-md"
          initial={{ width: 30 }}
          animate={{ width: 90 }}
          transition={{ repeat: Infinity, repeatDelay: 1, duration: 2.5 }}
        >
          <p className="text-xl  font-semibold w-[150px] absolute pl-2">Mehdi Zarei</p>
        </motion.div>
        {/* desktop nav */}
        <nav className="hidden space-x-2 ml-auto md:flex w-1/3 shadow-2xl ">
          {NavBarItems.map((navBarItem, index) => (
            <Link
              key={index}
              href={`#${navBarItem.href}`}
              className={`text-md hover:bg-white/25 py-1 px-2 rounded cursor-pointer
               transition-all ${router.asPath === `/#${navBarItem.href}` && 'bg-white/25'}
              `}
            >
              {navBarItem.title}
            </Link>
          ))}
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
          {NavBarItems.map((navBarItem, index) => (
            <Link
              key={index}
              href={`#${navBarItem.href}`}
              className="text-md hover:bg-white/25 py-1 px-2 rounded	cursor-pointer transition-all"
            >
              <span> {navBarItem.title}</span>
              {navBarItem.icon}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
