import { useState, useCallback } from "react";
const useToggle = (initialValue = false) => {
  const [toggleValue, setToggleValue] = useState(initialValue);

  // returns memoized version of the callback
  // that only changes if one of the dependencies has changed
  const toggle = useCallback(
    () => setToggleValue((toggleValue) => !toggleValue),
    []
  );

  return [toggleValue, toggle] as const;
};

export default useToggle;
