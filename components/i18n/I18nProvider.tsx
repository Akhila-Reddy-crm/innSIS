"use client";

import React, { createContext, useEffect, useMemo, useState } from "react";
import * as xlsx from "xlsx";

type Strings = Record<string, string>;

export type I18nContextValue = {
  lang: string;
  strings: Strings;
  isLoaded: boolean;
  setLang: (lang: string) => void;
};

export const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  strings: {},
  isLoaded: false,
  setLang: () => {},
});

export function I18nProvider({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode;
  initialLang?: string;
}) {
  const [lang, setLang] = useState<string>(initialLang);
  const [strings, setStrings] = useState<Strings>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setIsLoaded(false);
        // Avoid sticky browser/static-host caches while translations are actively edited.
        const res = await fetch(
          `/i18n/innsis_translations.xlsx?v=${Date.now()}`,
          { cache: "no-store" }
        );
        const buf = await res.arrayBuffer();
        const wb = xlsx.read(buf, { type: "array" });
        const sheetName = wb.SheetNames[0];
        const ws = wb.Sheets[sheetName];

        const rows = xlsx.utils.sheet_to_json<Record<string, unknown>>(ws, {
          defval: "",
        });

        const nextStrings: Strings = {};
        for (const row of rows) {
          const kRaw = row.key;
          const k = typeof kRaw === "string" ? kRaw.trim() : "";
          if (!k) continue;

          const vRaw = (row[lang] ?? row.en ?? "") as unknown;
          const v = typeof vRaw === "string" ? vRaw : String(vRaw ?? "");
          nextStrings[k] = v;
        }

        if (!cancelled) setStrings(nextStrings);
      } catch {
        if (!cancelled) setStrings({});
      } finally {
        if (!cancelled) setIsLoaded(true);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [lang]);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, strings, isLoaded, setLang }),
    [lang, strings, isLoaded]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

