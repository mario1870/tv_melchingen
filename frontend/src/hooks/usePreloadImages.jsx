import { useState, useEffect } from "react";

const usePreloadImages = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const imageElements = imageUrls.map(url => {
      const img = new Image();
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === imageUrls.length) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Error loading image: ${url}`);
      };
      img.src = url;
      return img;
    });

    return () => {
      imageElements.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return loaded;
};

export default usePreloadImages;
