import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Learn Sbux</title>
        <meta name="learn sbux workflow" content="sbux training app" />
      </Head>

      <main>
        <Layout/>
        <h1 className="">hello world</h1>
      </main>
    </div>
  );
};

export default Home;
