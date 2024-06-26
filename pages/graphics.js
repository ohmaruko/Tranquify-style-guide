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
              each depicted in a unique colour palette to maintain consistent tones aligned with our app's design.
              To enhance inclusivity and approachability, the mascots are intentionally designed with imperfect shapes,
              conveying the message that it's okay not to be perfect.
            </p>
          </div>
        </div>

        <div className={styles.graphicsContainer}>
          <div className={styles.graphics}>
            {mascots.map((e, index) => (
              <Image key={index} src={e} width={80} height={100} alt={mascotsAltText[index]} />
            ))}
          </div>
          <div className={styles.graphics}>
            {colours.map((e, index) => (
              <div key={index} className={styles.paletteContainer}>
                <div className={styles.palette} style={{ backgroundColor: e }}></div>
                <p>{e}</p>
              </div>
            ))}
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
              We use icons from <Link href="https://fonts.google.com/icons">Google </Link>
              as they offer simplicity and aligns with user expectations for design.</p>
          </div>
        </div>
        <div className={styles.graphicsContainer}>
          <div className={styles.icons}>
            <p className={styles.iconText}>Navigation Bar</p>
            <div className={styles.iconDescription}>
              <p>Navigation bar icons represent different pages within the app,
                making it easier for users to navigate to each page.</p>
              <p>Size: 40px x 40px</p>
            </div>
            <Image src={'/images/navbar.svg'} width={430} height={94} alt="Home Icon" />
          </div>
          <div className={styles.icons}>
            <p className={styles.iconText}>Mood Tracker Questions</p>
            <div className={styles.iconDescription}>
              <p>On the Mood Tracker page, users are presented with a series of questions to answer.
              These questions feature icon options that users can quickly select to indicate
              their mood, stress level, and other parameters.</p>
              <p>Mood Icon Size: 55px x 55px</p>
              <p>Stress/Sleep Level Icons Size : 52px x 52px</p>
            </div>
            <div className={styles.graphics}>
              {
                moods.map((e, index) => {
                  return (
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
            <div className={styles.iconDescription}>
              <p>
                The Settings page contains eight setting menus,
                each accompanied by icons on their respective buttons.
                These icons help users easily locate the setting option they desire.
              </p>
              <p>Icon Size: 18px x 18px</p>
            </div>
            <div className={styles.iconsItemsContainer}>
              <Image src={'/images/settingAccount.svg'} width={268} height={71} alt="Account Settings Button" />
              <Image src={'/images/settingFavourites.svg'} width={268} height={71} alt="Setting Favourites Button" />
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.category}>
            <p>Photographs</p>
          </div>
          <div className={styles.text}>
            <p>Photographs are used as thumbnails for meditation content, 
              arranged within square containers of two different sizes. 
              The corners are gently rounded, ensuring the easy recognition as 
              clickable cards and enhancing accessibility for users.
            </p>
          </div>
        </div>

        <div className={styles.graphicsContainer}>
          <div className={`${styles.graphics} ${styles.photographsContainer}`}>
            <p>Small Thumbnail Size: 88px x 88px</p>
            <div className={styles.photographs01}>
              <Image src={'/images/photo01.svg'} width={430} height={112} alt="Meditation card Example" />
              <Image src={'/images/photo02.svg'} width={430} height={112} alt="Meditation card Example" />
            </div>
            <p>Large Thumbnail Size: 128px x 128px</p>
            <div className={styles.photographs02}>
              <Image src={'/images/photo03.svg'} width={128} height={166} alt="Meditation card Example" />
              <Image src={'/images/photo04.svg'} width={128} height={166} alt="Meditation card Example" />
              <Image src={'/images/photo05.svg'} width={128} height={166} alt="Meditation card Example" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
