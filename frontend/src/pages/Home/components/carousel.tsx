import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewsHeadline from "./newsHeadline";
import usePreloadImages from "@/hooks/usePreloadImages";
import useCarousel from "@/hooks/useCarousel";

interface Background {
  id: number;
  url: string;
}

const backgrounds: Background[] = [
  { id: 1, url: "/home/elfer_wp-1.webp" },
  { id: 2, url: "/home/t2.jpg" },
  { id: 3, url: "/home/yoga_wp.webp" },
];

const TRANSITION_DURATION = 2;

const Carousel: React.FC = () => {
  const allImagesLoaded = usePreloadImages(backgrounds.map(b => b.url));
  const currentIndex = useCarousel(backgrounds.length);
  
  if (!allImagesLoaded) return <div>Lade...</div>;
  
  return (
    <AnimatePresence>
      <motion.div
        key={backgrounds[currentIndex].id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: TRANSITION_DURATION }}
        style={{
          backgroundImage: `url(${backgrounds[currentIndex].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-center"
      >
        <div className="flex w-11/12 md:w-8/12 2xl:min-w-[70rem] mb-20">
          <NewsHeadline />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Carousel;