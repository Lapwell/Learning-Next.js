/**
 * @class       : first-page
 * @author      : lapwell (lapwell@omnissiahFrame)
 * @created     : Friday Dec 16, 2022 13:39:52 PST
 * @description : first-page
 */

import Link from 'next/link';
import Image from'next/image';
import Head from 'next/head';
import Layout from '../../components/layout.js';

const EarthRiseImage = () => (
<Image src="/public/apollo-earth-rise.jpg" height={400} width={400} alt="Earth Rise"/>
);

export default function firstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post.lol</title>
            </Head>
            <h1>CHEEKI BREEKI</h1>
            <h2><Link href="/">Back to the past Jack</Link></h2>
        </Layout>
    );
}

