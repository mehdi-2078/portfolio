import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children?: React.ReactNode;
};
export function Layout(props: Props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
