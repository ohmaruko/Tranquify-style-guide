import "@/styles/globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
  <main className={dmSans.className}>
        <Component {...pageProps} />
  </main>
  )
}
