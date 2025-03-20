import { useScroll } from "framer-motion";
import { useRef } from "react";

const useScrollViewport = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    return { scrollYProgress, targetRef };
};

export default useScrollViewport;
