import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Kanit', sans-serif;
  }
`;

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Spider Chart หลักเกณฑ์การประเมินโครงการฯ</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <GlobalStyle />
      <MantineProvider
        theme={{
          /** Put your mantine theme override here */
          fontFamily: 'Kanit, sans-serif',
          breakpoints: {
            xs: '500px',
            sm: '800px',
            md: '1000px',
            lg: '1200px',
            xl: '1400px',
          },         
        }}>
        <Component {...pageProps} />
      </MantineProvider>
    </> 
  );
};