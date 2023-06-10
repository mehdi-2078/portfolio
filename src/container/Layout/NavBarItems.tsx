import React from 'react';

import { BsProjector, BsTools } from 'react-icons/bs';
import { MdOutlineInfo, MdOutlinePermContactCalendar } from 'react-icons/md';

interface NavBarItem {
  title: string;
  href: string;
  icon: React.ReactElement;
  size: number;
}
export const NavBarItems: NavBarItem[] = [
  { title: 'banner', href: 'banner', icon: <MdOutlineInfo />, size: 20 },
  { title: 'about', href: 'about', icon: <MdOutlineInfo />, size: 20 },
  { title: 'skills', href: 'skills', icon: <BsTools />, size: 20 },
  { title: 'projects', href: 'projects', icon: <BsProjector />, size: 20 },
  { title: 'experience', href: 'experience', icon: <MdOutlineInfo />, size: 20 },
  // { title: 'gallery', href: 'gallery', icon: <MdOutlineInfo />, size: 20 },
  { title: 'contactMe', href: 'contactMe', icon: <MdOutlinePermContactCalendar />, size: 20 },
];
