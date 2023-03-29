import Head from 'next/head';
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_SV_ID;

const GA4Head = () => (
    <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
    </Head>
);

export default GA4Head;