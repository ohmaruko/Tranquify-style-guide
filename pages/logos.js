import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import styles from "@/styles/logos.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Logos</title>
      </Head>
      <Header />
      <main className={styles.main}>
        Logos Page
      </main>
    </>
  );
}
