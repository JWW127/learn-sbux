import Head from "next/head";
//import { Layout } from "../components/Layout";
import { PosTopNav } from "../components/PosTopNav";
const Pos = () => {
  return (
    <div>
      <Head>
        <title>Learn Sbux</title>
        <meta name="learn sbux workflow" content="sbux training app" />
      </Head>

      <main>
        <div className="flex flex-wrap content-start w-full h-[96vh] border-4 border-green-900">
          < PosTopNav />
          <div className="h-[84vh] border-2 basis-1/3">
            stuff
          </div>
          <div className="border-2 border-green-500 basis-2/3">something2</div>
        </div>
      </main>
    </div>
  );
};

export default Pos;
