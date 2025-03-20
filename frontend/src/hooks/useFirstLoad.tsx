import { useState, useEffect } from "react";

const useFirstLoad = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const isFirstLoad = sessionStorage.getItem('isFirstLoad') === null;
      if (isFirstLoad) {
        sessionStorage.setItem('isFirstLoad', 'false');
        setIsVisible(true);
      }
    }, []);
  
    return [isVisible, setIsVisible];
  };

export default useFirstLoad