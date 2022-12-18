/*
@author    :lapwell
@file      :musicList
@created   :Sunday Dec 18, 2022 01:42:01 PST
*/

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Style from '../../styles/Home.module.css';

export default function musicList() {
    return (
        <div className={Style.container}>
            <Head>
                <title>Gopnik Music</title>
            </Head>

            <main>
                <h1 className={Style.title}>
                    Some good music
                </h1>
                <div className={Style.card}>
                    <a target='_blank' href='https://www.youtube.com/playlist?list=PLgwDJ8sHLDLxCH8P4kohpZJNQH6lqbU8F'>
                        <h1>MustListenMusic</h1>
                        <p>This is my playlist; had it for years</p>
                    </a>
                </div>
                <div className={Style.card}>
                    <a target='_blank' href='https://www.youtube.com/@okokok_1031/videos'>
                        <h1>OK</h1>
                        <p>She has an angelic voice and she is cute :)</p>
                    </a>
                </div>
                <div className={Style.card}>
                    <a target='_blank' href='https://www.youtube.com/@ibiBerlin'>
                        <h1>ibi</h1>
                        <p>Some amazing piano piaces</p>
                    </a>
                </div>
                <div className={Style.card}>
                    <a target='_blank' href='https://www.youtube.com/watch?v=X1xirL-16AU&t'>
                        <h1>Arctic Monkey -RainMusic</h1>
                        <p>A nice calm compilation</p>
                    </a>
                </div>
            </main>

            <footer>
            </footer>
        </div>
    )
}

