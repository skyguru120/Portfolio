import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = ({ className = "" }) => {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      className={`lang-toggle ${className}`}
      onClick={toggleLocale}
      aria-label={t.nav.toggleAria}
    >
      <span className={`lang-toggle__option ${locale === "en" ? "lang-toggle__option--active" : ""}`}>
        EN
      </span>
      <span className="lang-toggle__divider" aria-hidden="true" />
      <span className={`lang-toggle__option ${locale === "ja" ? "lang-toggle__option--active" : ""}`}>
        JA
      </span>
    </button>
  );
};

export default LanguageToggle;
