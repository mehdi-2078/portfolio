import { StaticImageData } from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import bootstrap from '../../../../public/assets/images/skills-icon/bootstrap.png';
import css from '../../../../public/assets/images/skills-icon/css_original_wordmark_logo_icon_146576.png';
import express from '../../../../public/assets/images/skills-icon/express_original_wordmark_logo_icon_146528.png';
import nodeJs from '../../../../public/assets/images/skills-icon/file_type_node_icon_130301.png';
import storyBook from '../../../../public/assets/images/skills-icon/file_type_storybook_icon_130145.png';
import git from '../../../../public/assets/images/skills-icon/git_original_logo_icon_146509.png';
import html from '../../../../public/assets/images/skills-icon/html5.png';
import i18 from '../../../../public/assets/images/skills-icon/i18.png';
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
import tailwind from '../../../../public/assets/images/skills-icon/tailwind.png';
import trello from '../../../../public/assets/images/skills-icon/Trello_icon-icons.com_66775.png';
import typescript from '../../../../public/assets/images/skills-icon/typescript_original_logo_icon_146317.png';

interface Item {
  key: string;
  src: string | StaticImageData;
  title: string;
}

export const data: Item[] = [
  {
    key: uuidv4(),
    src: html,
    title: 'html5',
  },
  {
    key: uuidv4(),
    src: css,
    title: 'css3',
  },
  {
    key: uuidv4(),
    src: javascript,
    title: 'javascript',
  },
  {
    key: uuidv4(),
    src: typescript,
    title: 'typescript',
  },
  {
    key: uuidv4(),
    src: react,
    title: 'react js',
  },
  {
    key: uuidv4(),
    src: nextJs,
    title: 'next js',
  },
  {
    key: uuidv4(),
    src: reactNative,
    title: 'react native',
  },
  {
    key: uuidv4(),
    src: pwa,
    title: 'pwa',
  },
  {
    key: uuidv4(),
    src: redux,
    title: 'redux',
  },
  {
    key: uuidv4(),
    src: tailwind,
    title: 'tailwind',
  },
  {
    key: uuidv4(),
    src: materialUi,
    title: 'material ui',
  },
  {
    key: uuidv4(),
    src: styledComponents,
    title: 'styled components',
  },
  {
    key: uuidv4(),
    src: bootstrap,
    title: 'bootstrap',
  },
  {
    key: uuidv4(),
    src: sass,
    title: 'sass',
  },
  {
    key: uuidv4(),
    src: storyBook,
    title: 'storyBook',
  },
  {
    key: uuidv4(),
    src: i18,
    title: 'i18',
  },
  {
    key: uuidv4(),
    src: git,
    title: 'git , github',
  },
  {
    key: uuidv4(),
    src: nodeJs,
    title: 'node js',
  },
  {
    key: uuidv4(),
    src: express,
    title: 'express js',
  },
  {
    key: uuidv4(),
    src: mongo,
    title: 'mongo db',
  },
  {
    key: uuidv4(),
    src: trello,
    title: 'trello',
  },
];
