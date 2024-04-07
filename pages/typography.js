import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Typography.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Typography</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Typography</h1>
        <div className={styles.logoFont}>
          <div className={styles.quicksand}>
            <h2>Quicksand</h2>
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>1234567890</p>
          </div>
          <div className={styles.quicksandText}>
            Quicksand is chosen as the logo font because of its friendly style. The rounded style of the font compliments well with our logo and mascots, which also have a smooth and rounded shapes. Its smooth curves and clean look convey a sense of calmness, inclusiveness, and approachability, which align well with our mood tracking and meditation app.  
          </div>
        </div>
        <div className={styles.logoFontUsage}>
          <div className={styles.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 120 120" fill="none">
              <path d="M104.727 1.88061H15.2684C7.87141 1.88061 1.88037 7.87613 1.88037 15.2687V95.2791C15.7162 113.449 37.3072 104.463 49.3834 92.2478C50.6371 90.9806 52.4595 90.4746 54.1968 90.8507C74.955 95.3373 110.14 82.8537 110.14 54.5418V49.7373C110.14 47.7358 110.794 45.7836 111.998 44.1896C114.443 40.9612 116.467 37.8493 118.115 34.8448V15.2687C118.115 7.87165 112.119 1.87613 104.722 1.87613L104.727 1.88061Z" fill="#A7BF87"/>
              <path d="M103.728 0H16.2716C7.32089 0 0 7.3209 0 16.2716V103.728C0 112.679 7.32089 120 16.2716 120H103.728C112.679 120 120 112.679 120 103.728V16.2716C120 7.3209 112.679 0 103.728 0ZM118.119 103.728C118.119 111.676 111.676 118.119 103.728 118.119H16.2716C8.32388 118.119 1.88059 111.676 1.88059 103.728V16.2716C1.88059 8.32388 8.32388 1.8806 16.2716 1.8806H103.728C111.676 1.8806 118.119 8.32388 118.119 16.2716V103.728Z" fill="#A7BF87"/>
              <path d="M34.0789 32.794C31.9073 32.794 29.3819 32.1403 26.4849 30.4433C25.9521 30.1298 25.773 29.4448 26.0819 28.9119C26.3953 28.3791 27.0804 28.2 27.6132 28.5089C31.5312 30.8015 37.1237 32.288 41.4983 26.3283C41.8655 25.8313 42.564 25.7194 43.061 26.0866C43.558 26.4537 43.6655 27.1522 43.3028 27.6492C41.6595 29.8836 38.6461 32.7895 34.0789 32.7895V32.794Z" fill="white"/>
              <path d="M58.5314 27.6268C56.7583 27.6268 54.7255 27.2462 52.3971 26.3283C51.824 26.1 51.5419 25.4507 51.7658 24.8776C51.9941 24.3045 52.6389 24.0179 53.2165 24.2462C57.4523 25.9164 63.2106 26.5343 66.618 19.997C66.9046 19.4462 67.5807 19.2358 68.127 19.5224C68.6732 19.8089 68.8882 20.4851 68.6016 21.0313C67.1688 23.7851 64.1553 27.6313 58.527 27.6313L58.5314 27.6268Z" fill="white"/>
              <path d="M37.1685 48.9045C29.4849 48.9045 22.6835 47.3955 17.7984 44.4627C17.27 44.1448 17.0954 43.4552 17.4133 42.9269C17.7312 42.3985 18.4208 42.2239 18.9491 42.5418C36.4969 53.0687 69.9447 42.7522 85.0118 26.9194C85.4372 26.4716 86.1447 26.4537 86.5924 26.8791C87.0402 27.3045 87.0581 28.0119 86.6327 28.4597C78.0044 37.5224 65.082 44.4134 51.1745 47.3687C46.3432 48.394 41.6059 48.9 37.1641 48.9L37.1685 48.9045Z" fill="white"/>
            </svg>
            <h2>Tranquify</h2>
          </div>
          <div className={styles.logoStyle}>
            <h2>Bold 36pts</h2>
          </div>
        </div>

        <div className={styles.bodyFont}>
          <div className={styles.dmSans}>
            <h2>DM Sans</h2>
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>1234567890</p>
          </div>
            <div className={styles.quicksandText}>
              DM Sans is chosen as the body font because of its great readability. Its clear letter forms allows easy-reading and stress-free experience, crucial for users engaging with mood tracking and meditation content. DM Sans also provides a comfortable reading experience across different devices, enhancing the usability of our app.
            </div>
        </div>
        <div className={styles.bodyFontUsage}>
          <div className={styles.fontTable}>
            <div>H1</div>
            <div>Heading</div>
            <div className={styles.gridItem}>Regular 32pts</div>
            <div>H2</div>
            <div>Subheading</div>
            <div>Bold 20pts</div>
            <div>Paragraph</div>
            <div>Bold Body</div>
            <div>Bold 16pts</div>
            <div></div>
            <div>Body</div>
            <div>Regular 16pts</div>
            <div></div>
            <div>Small Body</div>
            <div>Regular 12pts</div>
            <div>Links</div>
            <div className={styles.link}>Continue as guest</div>
            <div>Bold 16pts</div>
          </div>
        </div>
      </main>
    </>
  );
}
