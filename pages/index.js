import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from './components/Main'

export default function Home() {
  return (
    <div className={`${styles.container} h-full bg-gray-100`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}
