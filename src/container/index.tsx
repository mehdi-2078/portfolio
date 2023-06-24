import dynamic from 'next/dynamic';

/// /////Start of HomePage/////////
export const Banner = dynamic(() => import('./homePage/Banner/Banner').then((mod) => mod.Banner), {
  loading: () => <p>Loading...</p>,
});

export const About = dynamic(() => import('./homePage/About/About').then((mod) => mod.About), {
  loading: () => <p>Loading...</p>,
});

export const Contact = dynamic(
  () => import('./homePage/Contact/Contact').then((mod) => mod.Contact),
  {
    loading: () => <p>Loading...</p>,
  }
);
export const Experiences = dynamic(
  () => import('../components/experiences/Experiences').then((mod) => mod.Experiences),
  {
    loading: () => <p>Loading...</p>,
  }
);

export const Skills = dynamic(() => import('./homePage/Skills/Skills').then((mod) => mod.Skills), {
  loading: () => <p>Loading...</p>,
});
/// /////end of HomePage/////////

/// /////Start of Layout /////////
export const Header = dynamic(() => import('./Layout/Header').then((mod) => mod.Header), {
  loading: () => <p>Loading...</p>,
});

export const Layout = dynamic(() => import('./Layout/Layout').then((mod) => mod.Layout), {
  loading: () => <p>Loading...</p>,
});

export { NavBarItems } from './Layout/NavBarItems';
/// /////end of Layout /////////
