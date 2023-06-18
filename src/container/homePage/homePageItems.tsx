import React from 'react';

import { Experiences } from '../../components/experiences/Experiences';
import { About, Banner, Contact, Skills } from '../index';

interface HomePageItem {
  id: string;
  component?: React.ReactElement;
}
export const homePageItems: HomePageItem[] = [
  { id: 'home', component: <Banner /> },
  { id: 'about', component: <About /> },
  { id: 'skills', component: <Skills /> },
  { id: 'projects' },
  { id: 'experiences ', component: <Experiences /> },
  // { id: 'gallery', component: <Gallery /> },
  { id: 'contactMe', component: <Contact /> },
];
