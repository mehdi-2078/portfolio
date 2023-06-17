import dynamic from 'next/dynamic';

/// /////Start of HomePage Banner/////////
export const Banner = dynamic(() => import('./homePage/Banner/Banner').then((mod) => mod.Banner), {
  loading: () => <p>Loading...</p>,
});
/// /////end of HomePage Banner/////////

/// /////Start of HomePage Banner/////////
export const About = dynamic(() => import('./homePage/About/About').then((mod) => mod.About), {
  loading: () => <p>Loading...</p>,
});
/// /////end of HomePage Banner/////////

/// /////Start of HomePage Gallery/////////
// export { Gallery } from './homePage/Gallery/Gallery';
/// /////end of HomePage Gallery/////////

/// /////Start of HomePage Contact/////////
export const Contact = dynamic(
  () => import('./homePage/Contact/Contact').then((mod) => mod.Contact),
  {
    loading: () => <p>Loading...</p>,
  }
);
/// /////end of HomePage Contact/////////

/// /////Start of HomePage Skills/////////
export const Skills = dynamic(() => import('./homePage/Skills/Skills').then((mod) => mod.Skills), {
  loading: () => <p>Loading...</p>,
});
/// /////end of HomePage Skills/////////

/// /////Start of Layout Header/////////
export const Header = dynamic(() => import('./Layout/Header').then((mod) => mod.Header), {
  loading: () => <p>Loading...</p>,
});

/// /////end of Layout Header/////////

// / /////Start of Layout Footer/////////
export { Footer } from './Layout/Footer';
/// /////end of Layout Footer/////////

// / /////Start of Layout Layout/////////
export const Layout = dynamic(() => import('./Layout/Layout').then((mod) => mod.Layout), {
  loading: () => <p>Loading...</p>,
});
/// /////end of Layout Layout/////////

// / /////Start of Layout NavBarItems/////////

export { NavBarItems } from './Layout/NavBarItems';
/// /////end of Layout NavBarItems/////////
