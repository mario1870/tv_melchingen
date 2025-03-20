import { useState, useEffect } from "react";

const LOAD_DURATION = 2000; // Benannte Konstante für die Dauer

interface WelcomeLoaderResult {
  isLoading: boolean;
  welcomeText: string;
}

/**
 * Custom hook für einen Begrüßungs-Ladebildschirm
 * @param initialText Der anfängliche Begrüßungstext (Standard: "Willkommen!")
 * @returns Ein Objekt mit dem Ladestatus und dem Begrüßungstext
 */
const useWelcomeLoader = (initialText = "Willkommen!"): WelcomeLoaderResult => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOAD_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return { isLoading, welcomeText: initialText };
};

export default useWelcomeLoader;