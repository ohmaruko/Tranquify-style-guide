import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tranquify Style Guide Home</title>
      </Head>
      <Header />
      <main className={styles.main}>
        Tranquify Style Guide Home
      </main>
    </>
  )
}
