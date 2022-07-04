import Head from "next/head";
import { PosTopNav } from "../components/PosTopNav";
import { OrderBox } from "../components/OrderBox";
import { OrderBoxMenu } from "../components/OrderBoxMenu";

const Pos = () => {
  return (
    <>
      <Head>
        <title>Learn Sbux</title>
        <meta name="learn sbux workflow" content="sbux training app" />
      </Head>

      <main>
        <div className="flex flex-wrap content-start w-full border-2 border-green-900">
          <PosTopNav />
          <div className="h-[84vh] border-x-8 border-x-stone-500 basis-1/3 flex-col">
            <OrderBox />
            <OrderBoxMenu />
          </div>
          <div className="border-l-8 border-l-stone-500 basis-2/3">
            something2
          </div>
        </div>
      </main>
    </>
  );
};

export default Pos;
