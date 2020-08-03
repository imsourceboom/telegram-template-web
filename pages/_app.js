import React from 'react';
import Head from 'next/head';

import GlobalStyled from '../styles/globalConfig';
import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detaction" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin" />

        <title>Title</title>
        <meta name="title" content="title" />
        <meta name="description" content="for " />
        <meta name="keywords" content="ton, 톤, 블록체인, blockchain" />

        <meta property="og:title" content="title" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/favicons/android-icon-512x512.png" />
        <meta property="og:type" content="website" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        <meta name="apple-mobile-web-app-title" content="title" />
        <link
          link="apple-touch-icon"
          size="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          link="apple-touch-icon"
          size="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          link="apple-touch-icon"
          size="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          link="apple-touch-icon"
          size="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          link="apple-touch-icon"
          size="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          link="apple-touch-icon"
          size="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          link="apple-touch-icon"
          size="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          link="apple-touch-icon"
          size="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          link="apple-touch-icon"
          size="180x180"
          href="/favicons/apple-icon-180x180.png"
        />

        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x19.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-70x70.png" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-150x150.png" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-310x310.png" />

        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#ffffff" />

        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <GlobalStyled />
      <Component />
    </>
  );
};

export default wrapper.withRedux(App);
// export default App;
