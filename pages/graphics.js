import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Graphics</title>
      </Head>
      <Header />
      <main>
        Graphics Page
      </main>
    </>
  );
}
