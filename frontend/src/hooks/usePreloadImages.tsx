import { useState, useEffect } from "react";

/**
 * Custom hook zum Vorladen von Bildern
 * @param imageUrls Ein Array von Bild-URLs, die vorgeladen werden sollen
 * @returns Ein Boolean, der angibt, ob alle Bilder geladen wurden
 */
const usePreloadImages = (imageUrls: string[]): boolean => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    let loadedCount = 0;
    const imageElements: HTMLImageElement[] = imageUrls.map(url => {
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