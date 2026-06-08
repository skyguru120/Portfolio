import { motion } from "framer-motion";
import { callToAction } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const LetsConnect = ({ className = "" }) => {
  const { t } = useLanguage();

  return (
    <motion.button
      type="button"
      className={`planet-connect group ${className}`}
      onClick={() => window.open(callToAction)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 0.2 },
      }}
      aria-label={t.letsConnect.ariaLabel}
    >
      <span className="planet-connect__scene">
        <span className="planet-connect__halo" aria-hidden="true" />
        <motion.span
          className="planet-connect__ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        <motion.span
          className="planet-connect__ring planet-connect__ring--inner"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        <span className="planet-connect__glow" aria-hidden="true" />
        <span className="planet-connect__sphere" aria-hidden="true">
          <span className="planet-connect__highlight" />
          <span className="planet-connect__highlight planet-connect__highlight--2" />
          <span className="planet-connect__crater planet-connect__crater--1" />
          <span className="planet-connect__crater planet-connect__crater--2" />
        </span>
        <span className="planet-connect__spark planet-connect__spark--1" aria-hidden="true" />
        <span className="planet-connect__spark planet-connect__spark--2" aria-hidden="true" />
      </span>
      <span className="planet-connect__label">
        <span className="planet-connect__label-text">{t.letsConnect.line1}</span>
        <span className="planet-connect__label-text planet-connect__label-text--accent">
          {t.letsConnect.line2}
        </span>
      </span>
    </motion.button>
  );
};

export default LetsConnect;
