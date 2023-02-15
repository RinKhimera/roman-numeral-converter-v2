import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Converter from "../components/Converter";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-hero">
      <Head>
        <title>Roman Numeral Converter</title>
        <meta
          name="description"
          content="Roman Numeral Converter App bootstrapped with Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Converter />
    </div>
  );
};

export default Home;
