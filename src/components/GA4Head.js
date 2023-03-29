import { useRouter } from 'next/router';
import Head from 'next/head';

const GA4Head = () => {
    const router = useRouter();
    const path = router.asPath;

    let GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_SV_ID;

    if (path.startsWith('/no')) {
        GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_NO_ID;
    } else if (path.startsWith('/da')) {
        GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_DA_ID;
    }

    return (
        <Head>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
        </Head>
    );
};

export default GA4Head;