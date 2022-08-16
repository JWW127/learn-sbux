import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicTopNav = dynamic(() => import("./../components/PosTopNav"), {
  suspense: true,
});
const DynamicMainMenu = dynamic(() => import("./../components/MainMenu"), {
  suspense: true,
});
const DynamicOrderBox = dynamic(() => import("./../components/OrderBox"), {
  suspense: true,
});
const DynamicOrderBoxMenu = dynamic(
  () => import("./../components/OrderBoxMenu"),
  { suspense: true }
);

const Pos = () => {
  return (
    <>
      <Head>
        <title>POS Training</title>
        <meta name="learn sbux workflow" content="sbux training app" />
      </Head>

      <main>
        <div className="flex flex-wrap content-start w-full">
          <Suspense fallback={`Loading ...`}>
            <DynamicTopNav />
          </Suspense>
          <div className="h-[86vh] px-3 bg-neutral-600 lg:border-x-6 border-stone-500 basis-1/3 flex-col">
            <Suspense fallback={`Loading ...`}>
              <DynamicOrderBox />
              <DynamicOrderBoxMenu />
            </Suspense>
          </div>
          <div className="px-2 bg-neutral-500 basis-2/3">
            <Suspense fallback={`Loading ...`}>
              <DynamicMainMenu />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pos;
