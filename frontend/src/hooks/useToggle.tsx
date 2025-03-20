import { useCallback, useState, Dispatch, SetStateAction } from "react";

/**
 * Custom hook für einen einfachen Toggle-Zustand
 * @param initialState Der initiale Zustand des Toggles (Standard: false)
 * @returns Ein Array mit dem aktuellen Zustand, einer Toggle-Funktion und einer Setter-Funktion
 */
const useToggle = (initialState = false): [
  boolean, 
  () => void, 
  Dispatch<SetStateAction<boolean>>
] => {
  const [state, setToggle] = useState<boolean>(initialState);
  
  const toggle = useCallback(() => setToggle((prevState) => !prevState), []);
  
  return [state, toggle, setToggle];
};

export default useToggle;