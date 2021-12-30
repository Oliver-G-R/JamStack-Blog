import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          JAMSTCK | BLOG
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Hello
      </h1>
    </div>
  )
}
