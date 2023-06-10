import React from 'react';

import { Footer, Header } from '../index';

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
