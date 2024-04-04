import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Logos</title>
      </Head>
      <Header />
      <main>
        Logos Page
      </main>
    </>
  );
}
