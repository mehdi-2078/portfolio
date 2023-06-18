import React from 'react';

import { BsProjector, BsTools } from 'react-icons/bs';
import { MdOutlineInfo, MdOutlinePermContactCalendar } from 'react-icons/md';

interface NavBarItem {
  title: string;
  href: string;
  icon: React.ReactElement;
}
export const NavBarItems: NavBarItem[] = [
  { title: 'home', href: 'home', icon: <MdOutlineInfo /> },
  { title: 'about', href: 'about', icon: <MdOutlineInfo /> },
  { title: 'skills', href: 'skills', icon: <BsTools /> },
  { title: 'projects', href: 'projects', icon: <BsProjector /> },
  { title: 'experience', href: 'experience', icon: <MdOutlineInfo /> },
  // { title: 'gallery', href: 'gallery', icon: <MdOutlineInfo />},
  { title: 'contactMe', href: 'contactMe', icon: <MdOutlinePermContactCalendar /> },
];
