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
        <Image src='/images/Tranquify-logo-text.svg' alt='tranquify' width={150} height={150} />

        <div className={styles.mascotContainer}>
          <Image src='/images/great-mascot.svg' alt='great-mascot' width={120} height={120} />
          <Image src='/images/good-mascot.svg' alt='good-mascot' width={120} height={120} />
          <Image src='/images/ok-mascot.svg' alt='ok-mascot' width={120} height={120} />
          <Image src='/images/bad-mascot.svg' alt='bad-mascot' width={120} height={120} />
          <Image src='/images/terrible-mascot.svg' alt='terrible-mascot' width={120} height={120} />
        </div>

        <div className={styles.appIntro}>
          <h4>App Introduction</h4>
          <p>
            Tranquify aims to promote mental well-being and provide practical tools for individuals to manage their emotional health effectively.
            Our app is designed to equip individuals in prioritizing their mental well-being and incorporate meditational practices into their daily lives.<br></br>
            <br></br>
            The application provides a user-friendly platform that enables users to track their mood, stress levels, and sleep quality, while also offering personalized
            suggestions for meditation content tailored to their current emotional state. By visualizing their emotional journey through features like the Mood Calendar,
            users can gain insights into their patterns, identify triggers, and celebrate moments of positivity. <br></br>
            <br></br>
            With Tranquify, we aim to support individuals as they embark on achieving inner peace and tranquility.
          </p>
        </div>

        <div className={styles.groupInfo}>
          <h4>Group 08 Set H <br></br>
            Group Members: Angela, Crystal, Madoka
          </h4>
        </div>

      </main>
    </>
  )
}
