import React from 'react';

import { About } from './About/About';
import { Banner } from './Banner/Banner';
import { Contact } from './Contact/Contact';
import { Skills } from './Skills/Skills';
import { Experiences } from '../../components/experiences/Experiences';

interface HomePageItem {
  id: string;
  component?: React.ReactElement;
}
export const homePageItems: HomePageItem[] = [
  { id: 'banner', component: <Banner /> },
  { id: 'about', component: <About /> },
  { id: 'skills', component: <Skills /> },
  { id: 'projects' },
  { id: 'experiences ', component: <Experiences /> },
  // { id: 'gallery', component: <Gallery /> },
  { id: 'contactMe', component: <Contact /> },
];
