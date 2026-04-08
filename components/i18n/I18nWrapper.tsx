"use client";

import React, { useEffect, useState } from "react";
import { I18nProvider } from "@/components/i18n/I18nProvider";

export function I18nWrapper({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState("en");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Load language preference from localStorage
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // Avoid hydration mismatch by not rendering until client-side
  if (!isClient) {
    return <I18nProvider initialLang="en">{children}</I18nProvider>;
  }

  return <I18nProvider initialLang={lang}>{children}</I18nProvider>;
}
