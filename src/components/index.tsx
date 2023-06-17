/// /////Start of common/////////
import dynamic from 'next/dynamic';

export const MyCarousel = dynamic(
  () => import('./common/MyCarousel').then((mod) => mod.MyCarousel),
  {
    loading: () => <p>Loading...</p>,
  }
);
export { Title } from './common/Title';
export { TitleReadMore } from './common/TitleReadMore';
export { SocialNetWork } from './common/SocialNetWork';
/// /////end of common/////////

/// /////Start of contact/////////
export const ContactForm = dynamic(
  () => import('./contact/ContactForm').then((mod) => mod.ContactForm),
  {
    loading: () => <p>Loading...</p>,
  }
);
export const ContactInfo = dynamic(
  () => import('./contact/ContactInfo').then((mod) => mod.ContactInfo),
  {
    loading: () => <p>Loading...</p>,
  }
);
/// /////end of contact/////////

/// /////Start of contact/////////
export { Contents } from './details/Contents';
export { MyGallery } from './details/Gallery';
export { NextJsImage } from './details/NextImage';
/// /////end of contact/////////

/// /////Start of skills/////////

export const SkillItem = dynamic(() => import('./skills/SkillItem').then((mod) => mod.SkillItem), {
  loading: () => <p>Loading...</p>,
});
/// /////end of skills/////////
