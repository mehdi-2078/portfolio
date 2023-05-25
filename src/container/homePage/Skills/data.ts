import { StaticImageData } from 'next/image';
import { uuid } from 'uuidv4';

import bootstrap from '../../../../public/assets/images/skills/bootstrap.png';
// import css from '../../../../public/assets/images/skills/css.png';
import html from '../../../../public/assets/images/skills/html5.png';
import tailwind from '../../../../public/assets/images/skills/tailwind.png';
import css from '../../../../public/assets/images/skills-icon/css_original_wordmark_logo_icon_146576.png';
import express from '../../../../public/assets/images/skills-icon/express_original_wordmark_logo_icon_146528.png';
import nodeJs from '../../../../public/assets/images/skills-icon/file_type_node_icon_130301.png';
import storyBook from '../../../../public/assets/images/skills-icon/file_type_storybook_icon_130145.png';
import git from '../../../../public/assets/images/skills-icon/git_original_logo_icon_146509.png';
import reactNative from '../../../../public/assets/images/skills-icon/icons8-react-native-256.png';
import javascript from '../../../../public/assets/images/skills-icon/javascript_original_logo_icon_146455.png';
import materialUi from '../../../../public/assets/images/skills-icon/material-ui.png';
import mongo from '../../../../public/assets/images/skills-icon/mongodb_original_wordmark_logo_icon_146425.png';
import nextJs from '../../../../public/assets/images/skills-icon/nextjs_icon_213852.png';
import pwa from '../../../../public/assets/images/skills-icon/pwa.png';
import react from '../../../../public/assets/images/skills-icon/react_original_logo_icon_146374.png';
import redux from '../../../../public/assets/images/skills-icon/redux_original_logo_icon_146365.png';
import sass from '../../../../public/assets/images/skills-icon/sass_original_logo_icon_146350.png';
import styledComponents from '../../../../public/assets/images/skills-icon/styled-components.png';
import trello from '../../../../public/assets/images/skills-icon/Trello_icon-icons.com_66775.png';
import typescript from '../../../../public/assets/images/skills-icon/typescript_original_logo_icon_146317.png';
import i18 from '../../../../public/assets/images/skills-icon/i18.png';

interface Item {
  key: string;
  src: string | StaticImageData;
  title: string;
}

export const data: Item[] = [
  {
    key: uuid(),
    src: html,
    title: 'html5',
  },
  {
    key: uuid(),
    src: css,
    title: 'css3',
  },
  {
    key: uuid(),
    src: javascript,
    title: 'javascript',
  },
  {
    key: uuid(),
    src: typescript,
    title: 'typescript',
  },
  {
    key: uuid(),
    src: react,
    title: 'react js',
  },
  {
    key: uuid(),
    src: nextJs,
    title: 'next js',
  },
  {
    key: uuid(),
    src: reactNative,
    title: 'react native',
  },
  {
    key: uuid(),
    src: pwa,
    title: 'pwa',
  },
  {
    key: uuid(),
    src: redux,
    title: 'redux',
  },
  {
    key: uuid(),
    src: tailwind,
    title: 'tailwind',
  },
  {
    key: uuid(),
    src: materialUi,
    title: 'material ui',
  },
  {
    key: uuid(),
    src: styledComponents,
    title: 'styled components',
  },
  {
    key: uuid(),
    src: bootstrap,
    title: 'bootstrap',
  },
  {
    key: uuid(),
    src: sass,
    title: 'sass',
  },
  {
    key: uuid(),
    src: storyBook,
    title: 'storyBook',
  },
  {
    key: uuid(),
    src: i18,
    title: 'i18',
  },
  {
    key: uuid(),
    src: git,
    title: 'git , github',
  },
  {
    key: uuid(),
    src: nodeJs,
    title: 'node js',
  },
  {
    key: uuid(),
    src: express,
    title: 'express js',
  },
  {
    key: uuid(),
    src: mongo,
    title: 'mongo db',
  },
  {
    key: uuid(),
    src: trello,
    title: 'trello',
  },
];
