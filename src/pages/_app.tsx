import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Axios from "axios";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
  <script src="https://kit.fontawesome.com/969baeb221.js" crossOrigin="anonymous"></script>
  </Head>
   <Component {...pageProps} />;
  </>

)

}
