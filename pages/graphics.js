import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import styles from "@/styles/graphics.module.css"

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
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Logos</h1>
        <div className={styles.description}>
          <div className={styles.category}>
            <p>Mascots</p>
          </div>
          <div className={styles.text}>
            <p>description here</p>
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
              moods.map((e, index) => {
                return(
                    <div className={styles.moodIcon}>
                      <Image src={e} width={80} height={80} alt={moodsAltText[index]} />
                      <p>{moodsText[index]}</p>
                    </div>
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
            <p>description here</p>
          </div>
        </div>
        <div className={styles.graphicsContainer}>
          <div className={styles.icons}>
            <p className={styles.iconText}>Navigation Bar</p>
            <Image src={'/images/navbar.svg'} width={430} height={94} alt="Home Icon" />
          </div>
          <div className={styles.icons}>
            <p className={styles.iconText}>Mood Tracker Questions</p>
            <div className={styles.iconsItemsContainer}>
              <Image src={'/images/stressSlider.svg'} width={315} height={81} alt="Stress Level Slider" />
              <Image src={'/images/sleepSlider.svg'} width={315} height={81} alt="Sleep Quality Level Slider" />
            </div>
          </div>
          <div className={styles.icons}>
            <p className={styles.iconText}>Setting Menu</p>
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
