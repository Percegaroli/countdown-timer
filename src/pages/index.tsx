import React from 'react';
import Head from 'next/head';
import HomeTemplate from '../components/templates/HomeTemplate';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </div>
  );
}
