import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Converter</title>
        <meta name="description" content="Created By Majid Ahmed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}
