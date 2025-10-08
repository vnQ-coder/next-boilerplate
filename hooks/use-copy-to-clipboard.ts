"use client";

import { useState } from "react";

interface CopyOptions {
  timeout?: number;
}

export function useCopyToClipboard(options: CopyOptions = {}) {
  const { timeout = 2000 } = options;
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setIsCopied(false);
      return false;
    }
  };

  return { isCopied, copyToClipboard };
}

