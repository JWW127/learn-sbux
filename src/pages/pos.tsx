import Head from "next/head";
import { PosTopNav } from "../components/PosTopNav";
import { OrderBox } from "../components/OrderBox";

const Pos = () => {
  return (
    <div>
      <Head>
        <title>Learn Sbux</title>
        <meta name="learn sbux workflow" content="sbux training app" />
      </Head>

      <main>
        <div className="flex flex-wrap aspect-video content-start w-full h-[96vh] border-2 border-green-900">
          < PosTopNav />
          <div className="h-[84vh] border-x-8 border-x-stone-500 basis-1/3 flex-col">
            <OrderBox />
            <div className="bg-stone-500 h-2/5">box</div>
          </div>
          <div className="border-l-8 border-l-stone-500 basis-2/3">something2</div>
        </div>
      </main>
    </div>
  );
};

export default Pos;
