import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import styles from "@/styles/logos.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Logos</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Logos</h1>
        <div className={styles.description}>
          <div className={styles.text}>
            <p>Tranquify's logo features a cloud-like shape, embodying the essence of our app aimed at supporting users' mental well-being. 
              With closed eyes and a serene smile, the logo evokes feelings of calmness and relaxation. 
              To ensure versatility across different sizes, the cloud-shaped character is depicted showing only its face within a rounded square frame.</p>
          </div>
          <div className={styles.colour}>
            <div className={styles.palette}></div>
            <p>#A7BF87</p>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logos}>
            <div className={styles.singleLogo}>
              <p>Full Colour</p>
              <Image src='/images/logo-colour.svg' width={200} height={200} alt="Colour Logo" />
            </div>
            <div className={styles.singleLogo}>
              <p>Black and White</p>
              <Image src='/images/logo-bw.svg' width={200} height={200} alt="Black and White Logo" />
            </div>
            <div className={styles.singleLogo}>
              <p>Grey Scale</p>
              <Image src='/images/logo-grey.svg' width={200} height={200} alt="Grey Logo" />
            </div>
          </div>
          <div className={`${styles.logos} ${styles.logosSecondRow}`}>
            <div className={styles.singleLogo}>
              <p>Horizontal</p>
              <Image src='/images/logo-horizontal.svg' width={200} height={100} alt="Horizontal Logo" />
            </div>
            <div className={styles.faviconsContainer}>
              <p>Favicons</p>
              <div className={styles.favicon}>
                <p>16 x 16 px</p>
                <Image src='/images/logo-16px.svg' width={16} height={16} alt="16px Logo" />
              </div>
              <div className={styles.favicon}>
                <p>32 x 32 px</p>
                <Image src='/images/logo-32px.svg' width={32} height={32} alt="32px Logo" />
              </div>
              <div className={styles.favicon}>
                <p>48 x 48 px</p>
                <Image src='/images/logo-48px.svg' width={48} height={48} alt="48px Logo" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
