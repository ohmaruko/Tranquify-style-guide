import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import styles from "@/styles/graphics.module.css"
import Link from 'next/link';

export default function Home() {
  const mascots = ['/images/great-mascot.svg', '/images/good-mascot.svg', '/images/ok-mascot.svg', '/images/bad-mascot.svg', '/images/terrible-mascot.svg']
  const mascotsAltText = ['Great mascot', 'Good mascot', 'Ok mascot', 'Bad mascot', 'Terrible mascot']
  const moods = ['/images/great-icon.svg', '/images/good-icon.svg', '/images/ok-icon.svg', '/images/bad-icon.svg', '/images/terrible-icon.svg']
  const moodsText = ['Great', 'Good', 'Ok', 'Bad', 'Terrible']
  const moodsAltText = ['Great icon', 'Good icon', 'Ok icon', 'Bad icon', 'Terrible icon']
  const colours = ["#FF9E88", "#F78B98", "#567751", "#79ADDC", "#5C5C6D"]

  return (
    <>
      <Head>
        <title>Graphics</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Graphics</h1>
        <div className={styles.description}>
          <div className={styles.category}>
            <p>Mascots</p>
          </div>
          <div className={styles.text}>
            <p>Our five mascots represent different moods, 
              each depicted in a unique color palette to maintain consistent tones aligned with our app's design. 
              To enhance inclusivity and approachability, the mascots are intentionally designed with imperfect shapes, 
              conveying the message that it's ok not to be perfect.
            </p>
          </div>
        </div>
        <div className={styles.graphicsContainer}>
          <div className={styles.graphics}>
            {
              mascots.map((e, index) => {
                return(
                      <Image src={e} width={80} height={100} alt={mascotsAltText[index]} />
                  )
              })
            }
          </div>
          <div className={styles.graphics}>
            {
              colours.map((e) => {
                return (
                  <div>
                    <div className={styles.palette} style={{backgroundColor: e}}></div>
                    <p>#A7BF87</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.category}>
            <p>Icons</p>
          </div>
          <div className={styles.text}>
            <p>Icons are utilized to improve visual communication with users, 
              enabling them to intuitively locate navigations or buttons. 
              Each icon is accompanied by label text, ensuring that users can read the label 
              even if they are unsure of the icon's meaning. 
              We use icons from <Link href="https://fonts.google.com/icons">Google</Link> 
              as they offer simplicity and align with user expectations for design.</p>
          </div>
        </div>
        <div className={styles.graphicsContainer}>
          <div className={styles.icons}>
            <p className={styles.iconText}>Navigation Bar</p>
            <p className={styles.iconDescription}>Navigation bar icons represent different pages within the app, 
              making it easier for users to navigate to each page.</p>
            <Image src={'/images/navbar.svg'} width={430} height={94} alt="Home Icon" />
          </div>
          <div className={styles.icons}>
            <p className={styles.iconText}>Mood Tracker Questions</p>
            <p className={styles.iconDescription}>
              On the mood tracker page, users are presented with a series of questions to answer. 
              These questions feature icon options that users can quickly select to indicate 
              their mood, stress level, and other parameters.</p>
            <div className={styles.graphics}>
              {
                moods.map((e, index) => {
                  return(
                      <div className={styles.moodIcon}>
                        <Image src={e} width={60} height={60} alt={moodsAltText[index]} />
                        <p>{moodsText[index]}</p>
                      </div>
                    )
                })
              }
            </div>
            <Image src={'/images/stressSlider.svg'} width={315} height={81} alt="Stress Level Slider" />
            <Image src={'/images/sleepSlider.svg'} width={315} height={81} alt="Sleep Quality Level Slider" />
          </div>
          <div className={styles.icons}>
            <p className={styles.iconText}>Setting Menu</p>
            <p className={styles.iconDescription}>
              The settings page contains eight setting menus, 
              each accompanied by icons on their respective buttons. 
              These icons help users easily locate the setting option they desire.
            </p>
            <div className={styles.iconsItemsContainer}>
              <Image src={'/images/settingAccount.svg'} width={268} height={71} alt="Account Settings Button" />
              <Image src={'/images/settingFavourites.svg'} width={268} height={71} alt="Setting Favourites Button" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
