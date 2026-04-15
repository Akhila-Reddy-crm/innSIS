"use client";

import { useContext, useMemo } from "react";
import { I18nContext } from "./I18nProvider";

export function useT() {
  const { strings, lang } = useContext(I18nContext);

  return useMemo(() => {
    function t(key: string, fallback?: string) {
      const v = strings[key];
      if (typeof v === "string" && v.trim() !== "") return v;
      return fallback ?? key;
    }

    return { t, lang };
  }, [strings, lang]);
}

