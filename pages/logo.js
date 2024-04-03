import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Logo</title>
      </Head>
      <Header />
      <main>
        Logo Page
      </main>
    </>
  );
}
