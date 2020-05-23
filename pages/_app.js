import App from 'next/app';
import React, { createContext } from 'react';
import '../styles/style.css';
import Airtable from 'airtable';
//import PropTypes from 'prop-types';

export const TranslationContext = createContext([]);
export const PictureContext = createContext([]);

function MyApp({ Component, pageProps, translations, pictures }) {
  return (
    <PictureContext.Provider value={pictures}>
      <TranslationContext.Provider value={translations}>
        <Component {...pageProps} />
      </TranslationContext.Provider>
    </PictureContext.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_APP
  );
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const texts = await base('Text').select().all();
  const images = await base('Images').select().all();

  return {
    ...appProps,
    translations: texts.map((x) => x.fields),
    pictures: images.map((x) => x.fields),
  };
};

// MyApp.propTypes = {
//   Component,
//   pageProps,
//   translations,
//   pictures,
// };

export default MyApp;
