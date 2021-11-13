import React from "react";
import Head from "next/head";

export default function HD({ text }) {
  return (
    <Head>
      <title>{text}</title>
    </Head>
  );
}
