import React from 'react';

import { About, Banner, Contact, Experiences, Skills } from '../index';

type HomePageItem = {
  id: string;
  component?: React.ReactElement;
};
export const homePageItems: HomePageItem[] = [
  { id: 'home', component: <Banner /> },
  { id: 'about', component: <About /> },
  { id: 'skills', component: <Skills /> },
  { id: 'projects' },
  { id: 'experiences ', component: <Experiences /> },
  // { id: 'gallery', component: <Gallery /> },
  { id: 'contactMe', component: <Contact /> },
];
