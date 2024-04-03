import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Colours</title>
      </Head>
      <Header />
      <main>
        Colours Page
      </main>
    </>
  );
}
