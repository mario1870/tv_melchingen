import { useState, useEffect } from "react";

const LOAD_DURATION = 2000; // Benannte Konstante für die Dauer

const useWelcomeLoader = (initialText = "Willkommen!") => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOAD_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading, welcomeText: initialText };
};

export default useWelcomeLoader;
