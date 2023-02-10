import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import useWindowDimensions from "../lib/window";
import { MobileUnsupported } from '../components/MobileUnsupported'

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
    const [getRender, setRender] = useState(false)
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width === undefined) {
            setRender(false)
        } else if (width < 1024) {
            setRender(false)
        } else {
            setRender(true)
        }
    }, [width, getRender])

    return getRender === false ? <MobileUnsupported /> : (
        <>
            <Head>
                <title>POS Training</title>
                <meta name="learn sbux workflow" content="sbux training app" />
            </Head>

            <main>
                <div className="flex w-full flex-wrap content-start">
                    <Suspense fallback={`Loading ...`}>
                        <DynamicTopNav />
                    </Suspense>
                    <div className="lg:border-x-6 h-[86vh] basis-1/3 flex-col border-stone-500 bg-neutral-600 px-3">
                        <Suspense fallback={`Loading ...`}>
                            <DynamicOrderBox />
                            <DynamicOrderBoxMenu />
                        </Suspense>
                    </div>
                    <div className="basis-2/3 bg-neutral-500 px-2">
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
