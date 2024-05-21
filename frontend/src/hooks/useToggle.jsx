import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
  const [state, setToggle] = useState(initialState);

  const toggle = useCallback(() => setToggle((prevState) => !prevState), []);

  return [state, toggle, setToggle];
};

export default useToggle;
