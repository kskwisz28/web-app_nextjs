import Head from 'next/head';
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_SV_ID;

const GA4Head = () => (
    <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics 4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
        <script
            dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `,
            }}
        />
    </Head>
);

export default GA4Head;