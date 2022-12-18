import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Gopnik Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          CLICK HERE<Link href="/posts/first-post"> FUCKER</Link>
        </h1>

        <p className={styles.description}>
          Let's learn some fucking webdev!
        </p>

        <div className={styles.grid}>
          <Link href="/music/musicList" className={styles.card}>
            <h3>Slapping Music &rarr;</h3>
            <p>
                Click for some good shit.
            </p>
          </Link>

          <a target='_blank' href="https://github.com/Lapwell?tab=repositories" className={styles.card}>
            <h3>Github&rarr;</h3>
            <p>TO THE GITHUB!</p>
          </a>

          <a target='_blank' href="" className={styles.card}>
            <h3> &rarr;</h3>
            <p></p>
          </a>

          <a target='_blank' href="" className={styles.card}>
            <h3>Cheeki Breeki&rarr;</h3>
            <p>
              
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
