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
          <div className="h-[86vh] sm:border-x-2 lg:border-x-8 border-x-stone-500 basis-1/3 flex-col">
            <OrderBox />
            <OrderBoxMenu />
          </div>
          <div className="sm:border-l-2 lg:border-l-8 border-l-stone-500 basis-2/3">
            <MainMenu />
          </div>
        </div>
      </main>
    </>
  );
};

export default Pos;
