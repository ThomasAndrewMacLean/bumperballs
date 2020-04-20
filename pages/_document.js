import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="nl">
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-163654154-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-163654154-1', { 'anonymize_ip': true });`,
            }}
          ></script>

          <link rel="manifest" href={`/manifest.json`} />

          <meta name="application-name" content="BMS Rent" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="BMS Rent" />
          <meta name="description" content="BMS Rent" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`/favicon-16x16.png`}
          />

          <link rel="shortcut icon" href={`/favicon.ico`} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://bmsrent.be" />
          <meta name="twitter:title" content="BMS Rent" />
          <meta name="twitter:description" content="BMS Rent" />
          <meta
            name="twitter:image"
            content="https://bmsrent.be/android-chrome-192x192.png"
          />
          {/*
<meta name="twitter:creator" content="@DavidWShadow" /> */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="BMS Rent" />
          <meta property="og:description" content="BMS Rent" />
          <meta property="og:site_name" content="BMS Rent" />
          <meta property="og:url" content="https://bmsrent.be" />
          <meta
            property="og:image"
            content="https://bmsrent.be/apple-touch-icon.png"
          />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}

          <script
            dangerouslySetInnerHTML={{
              __html: `  window.addEventListener('beforeinstallprompt', function(e) {
                e.preventDefault()
                return false;
            });`,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
