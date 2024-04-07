import Head from "next/head";
import Header from "@/components/Header";
import styles from "@/styles/References.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>References</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.referencesTitle}>References</h1>
        <div className={styles.references}>
          <div className={styles.fonts}>
            <p className={styles.subheading}>Fonts</p>
            <ul>
              <li>
                <p className={styles.bodyBold}>Quicksand: </p>
                <Link href="https://fonts.google.com/specimen/Quicksand ">https://fonts.google.com/specimen/Quicksand </Link>
              </li>
              <li>
                <p className={styles.bodyBold}>DM Sans: </p>
                <Link href="https://fonts.google.com/specimen/DM+Sans">https://fonts.google.com/specimen/DM+Sans</Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.icons}>
            <p className={styles.subheading}>Icons</p>
              <ul>
                <li>
                  <p className={styles.bodyBold}>Material Symbols: </p>
                  <Link href="https://fonts.google.com/icons ">https://fonts.google.com/icons </Link>
                </li>
              </ul>
          </div>

          <div className={styles.photos}>
            <p className={styles.subheading}>Photos</p>
            <ul>
              <li>
                <p className={styles.bodyBold}>Unsplash: </p>
                <Link href="https://unsplash.com/">https://unsplash.com/</Link>
              </li>
              <li>
                <p className={styles.bodyBold}>Pexels: </p>
                <Link href="https://www.pexels.com/">https://www.pexels.com/</Link>
              </li>
              <li>
                <p className={styles.bodyBold}>Adobe Stock: </p>
                <Link href="https://stock.adobe.com/ca/">https://stock.adobe.com/ca/</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
