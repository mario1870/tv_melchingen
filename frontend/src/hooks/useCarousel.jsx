import { useState, useEffect } from "react";

const INTERVAL_TIME = 8000;

const useCarousel = (length) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
      }, INTERVAL_TIME);
  
      return () => clearInterval(interval);
    }, [length]);
  
    return currentIndex;
  };

  export default useCarousel