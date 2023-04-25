import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import '../styles/global.css';
import { Layout } from '../container/Layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content="mehdi-zarei" />
      <meta name="theme-color" content="#fff" />
      <title>Dermistech</title>
    </Head>
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
