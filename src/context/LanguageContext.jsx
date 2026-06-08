import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n";

const LanguageContext = createContext(null);

const STORAGE_KEY = "portfolio-locale";

const readStoredLocale = () => {
  if (typeof window === "undefined") return "en";

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "ja" ? "ja" : "en";
  } catch {
    return "en";
  }
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(readStoredLocale);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Ignore storage errors (private browsing, blocked storage, etc.)
    }
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = () => {
    setLocale((current) => (current === "en" ? "ja" : "en"));
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: translations[locale],
    }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
