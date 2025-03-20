import { useState, useEffect } from "react";

const INTERVAL_TIME = 8000;

/**
 * Custom hook for implementing a carousel with automatic rotation
 * @param length The number of items in the carousel
 * @returns The current active index in the carousel
 */
const useCarousel = (length: number): number => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    }, INTERVAL_TIME);
 
    return () => clearInterval(interval);
  }, [length]);
 
  return currentIndex;
};

export default useCarousel;