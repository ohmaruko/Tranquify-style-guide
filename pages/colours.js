import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import styles from "@/styles/Colours.module.css"

import ColourCard from "@/components/ColourCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Colours</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main className={styles.main}>

        <h1 className={styles.title}>Colours</h1>

        <div className={styles.description}>
          <div className={styles.category}>
            <p>Colour Rationale</p>
          </div>

          <div className={styles.text}>
            <p>In selecting the colour palette for our application, we meticulously considered not only aesthetic appeal but also the psychological and physiological effects of colour on users.
            </p>

            <p>Our primary colour, “Light green” (#9DB580), was chosen for its calming and soothing properties. Green, often associated with nature and growth, resonates with users on a subconscious level, fostering feelings of tranquility and balance. This aligns perfectly with our application's theme, where users seek solace and support in their journey. Additionally, light green is scientifically recognized as a neutral colour for the human eye, reducing visual strain and ensuring a comfortable viewing experience for our users.
            </p>
            <div className={styles.cardContainer}>
              <ColourCard colourName="Light green" hexCode="#9DB580" />
            </div>

            <p>Complementing our main color, we integrated “Light gray” (#D9D9D9) and “Background gray” (#F3F3F3) to provide contrast and balance to the overall design. These subtle hues create a harmonious backdrop, allowing the vibrant elements of the interface to stand out without overwhelming the user.
            </p>
            <div className={styles.cardContainer}>
              <ColourCard colourName="Light gray" hexCode="#D9D9D9" />
              <ColourCard colourName="Background gray" hexCode="#F3F3F3" />
            </div>

            <p>Meanwhile, the inclusion of “Normal green” (#627952), “Dark green” (#465939), “Black green” (#3F4636), “Brown” (#705F44), and “Black” (#000000) adds depth and richness to our palette. By incorporating these green and earthy tones, we aim to evoke a sense of grounding and reassurance, reinforcing our commitment to supporting users through their journey with our application.
            </p>
            <div className={styles.cardContainer}>
              <ColourCard colourName="Normal green" hexCode="#627952" />
              <ColourCard colourName="Dark green" hexCode="#465939" />
              <ColourCard colourName="Black green" hexCode="#3F4636" />
              <ColourCard colourName="Brown" hexCode="#705F44" />
              <ColourCard colourName="Black" hexCode="#000000" />
            </div>

            <p>Furthermore, the choice of “Primary white” (#FFFFFF) and “Light beige” (#EEE1CC) serves to enhance readability and contrast, ensuring that essential information is easily accessible and legible. White represents purity and simplicity, while the beige adds a nice touch of warmth and softness to the overall aesthetic.
            </p>
            <div className={styles.cardContainer}>
              <ColourCard colourName="Primary white" hexCode="#FFFFFF" />
              <ColourCard colourName="Light beige" hexCode="#EEE1CC" />
            </div>

            <p>Together, our colour palette is thoughtfully crafted to not only visually appeal to users, but also to promote feelings of calmness, stability, and trust.  We believe these colours create a welcoming environment, inviting users to engage with our application comfortably and confidently.
            </p>
          </div>
        </div>


        <div className={styles.description}>
          <div className={styles.category}>
            <p>Contrast Checker Sample Results</p>
          </div>

          <div className={styles.gallery}>
            <Image src="/images/cc-1.png" width={200} height={300} alt="Contrast Checker Sample Results" />
            <Image src="/images/cc-2.png" width={200} height={300} alt="Contrast Checker Sample Results" />
            <Image src="/images/cc-3.png" width={200} height={300} alt="Contrast Checker Sample Results" />
            <Image src="/images/cc-4.png" width={200} height={300} alt="Contrast Checker Sample Results" />
            <Image src="/images/cc-5.png" width={200} height={300} alt="Contrast Checker Sample Results" />
          </div>
        </div>

        <div className={styles.description}>
          <div className={styles.category}>
            <p>Visual Examples</p>
          </div>

          <div className={styles.examples}>
            <Image src="/images/green-buttons.svg" width={200} height={300} alt="buttons" />
            <Image src="/images/brown-buttons.svg" width={200} height={300} alt="buttons" />
            <Image src="/images/green-arrows.svg" width={100} height={200} alt="arrows" />
            <Image src="/images/brown-arrows.svg" width={100} height={200} alt="arrows" />
          </div>
        </div>

      </main>
    </>
  );
}
