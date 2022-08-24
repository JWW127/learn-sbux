import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Learn Sbux</title>
        <meta name="learn sbux workflow" content="sbux training app" />
      </Head>

      <main className="flex flex-col w-full h-full">
        <div className="h-[100vh] bg-[url('https://res.cloudinary.com/dpc3zrcvs/image/upload/v1661326348/sign1920blur_dthzt1.jpg')] bg-cover">
        </div>
      </main>
    </div>
  );
};

export default Home;
