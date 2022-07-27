import Head from "next/head";
import { PosTopNav } from "../components/PosTopNav";
import { OrderBox } from "../components/OrderBox";
import { OrderBoxMenu } from "../components/OrderBoxMenu";
import { MainMenu } from "../components/MainMenu";

const Pos = () => {
  return (
    <>
      <Head>
        <title>POS Training</title>
        <meta name="learn sbux workflow" content="sbux training app" />
      </Head>

      <main>
        <div className="flex flex-wrap content-start w-full">
          <PosTopNav />
          <div className="h-[86vh] px-3 bg-neutral-600 lg:border-x-6 border-stone-500 basis-1/3 flex-col">
            <OrderBox />
            <OrderBoxMenu />
          </div>
          <div className="px-2 bg-neutral-500 basis-2/3">
            <MainMenu />
          </div>
        </div>
      </main>
    </>
  );
};

export default Pos;
