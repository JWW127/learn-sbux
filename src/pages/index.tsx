import type { NextPage } from "next";
import Link from "next/link"
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Learn Sbux</title>
                <meta name="learn sbux workflow" content="sbux training app" />
            </Head>
            <main className="flex h-full w-full flex-col bg-gradient-to-b from-gray-900 via-emerald-900 to-gray-900">
                <div className="flex flex-wrap justify-center items-center content-center gap-24 h-[100vh] opacity-70 bg-[url('https://res.cloudinary.com/dpc3zrcvs/image/upload/v1661326348/sign1920blur_dthzt1.jpg')] bg-cover">
                    <h1 className="basis-full text-white text-6xl text-center">Barista Training</h1>
                    <h2 className="basis-full text-white text-5xl text-center">Full Course <span className="text-yellow-500">100%</span> Free Forever!</h2>
                    <button className="mt-10 text-5xl text-gray-900 shadow-2xl shadow-yellow-900 bg-gradient-to-b from-yellow-400 to-yellow-500 p-6 rounded-full hover:shadow-yellow-500 active:shadow-sm active:opacity-80"><Link href="/drinks">Get Started </Link></button>
                </div>
            </main>
        </div>
    );
};

export default Home;
