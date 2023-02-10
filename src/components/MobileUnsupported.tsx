import Head from "next/head"
export const MobileUnsupported = () => {
    return (
        <>
            <Head>
                <title>Learn Sbux</title>
                <meta name="learn sbux workflow" content="sbux training app" />
            </Head>

            <main className="bg-gradient-to-bl from-black via-gray-900 to-green-900">
                <div className="h-[100vh] bg-gradient-to-tr from-black flex flex-wrap justify-around items-center content-center text-center">
                    <h2 className="text-white text-5xl basis-full">SORRY</h2>
                    <h2 className="text-white text-2xl w-[82vw] my-10"><span className="text-yellow-500">Point of Sale Module</span> Does not support smaller screen formats.</h2>
                </div>
            </main>
        </>
    )
}

