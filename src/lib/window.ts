import { useEffect, useState } from 'react';

type WindowDimentions = {
    width: number | undefined;
    height: number | undefined;
};

const useWindowDimensions = (): WindowDimentions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
};

export default useWindowDimensions;
