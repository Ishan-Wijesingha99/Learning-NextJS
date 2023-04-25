import styles from '@/styles/Home.module.css'
import Link from 'next/link'

// in normal react, we could add things to the head of the HTML by just navigating to the html file and adding it there, in NextJS we don't have that, so we do it this way
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Learning NextJS</title>
      </Head>

      <div className={styles.container}>
        <h1>Yo</h1>

        <Link href="/about">About</Link>
      </div>
    </>
  )
}
