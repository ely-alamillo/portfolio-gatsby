import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og;
  const title = pageProps.data?.title;
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content={title || `thoughts on paper`} />
        <meta property="og:site_name" content={`thoughts on paper`} />
        <meta
          property="og:description"
          content={
            og ? og.description : `An attempt at getting my thoughts on paper.`
          }
        />
        <meta
          property="og:image"
          content={
            og ? `${SITE_URL}${og.image}` : `${SITE_URL}/og/page-cardV2.png`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@botdev_" />
        <meta
          name="twitter:image"
          content={
            og ? `${SITE_URL}${og.image}` : `${SITE_URL}/og/page-cardV2.png`
          }
        />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />

        <title>{title || `thoughts on paper`}</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
