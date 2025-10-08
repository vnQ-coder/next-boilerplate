"use client";

import { useCallback, useState } from "react";

export function useToggle(
  defaultValue?: boolean
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle, setValue];
}

