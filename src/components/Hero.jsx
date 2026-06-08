import { motion } from "framer-motion";
import styles from "../style";
import LetsConnect from "./LetsConnect";
import FantasyHeroVisual from "./FantasyHeroVisual";
import { useLanguage } from "../context/LanguageContext";

const easeOut = [0.22, 1, 0.36, 1];

const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.15 + i * 0.11, duration: 0.75, ease: easeOut },
  }),
};

const AnimatedWords = ({ text, startIndex = 0, className = "" }) =>
  text.split(" ").map((word, i) => (
    <motion.span
      key={`${word}-${startIndex + i}`}
      custom={startIndex + i}
      variants={wordVariants}
      initial="hidden"
      animate="visible"
      className={`inline-block mr-[0.28em] last:mr-0 ${className}`}
    >
      {word}
    </motion.span>
  ));

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`hero-content flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="hero-content__aurora hero-content__aurora--1" aria-hidden="true" />
        <div className="hero-content__aurora hero-content__aurora--2" aria-hidden="true" />

        <motion.div
          className="hero-content__line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.9, ease: easeOut }}
          aria-hidden="true"
        />

        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[80px] leading-[80px] w-full hero-content__heading text-white">
          <AnimatedWords text={t.hero.greeting1} className="hero-content__word" />
          <br className="sm:block hidden" />
          <AnimatedWords text={t.hero.greeting2} startIndex={2} className="hero-content__word" />
        </h1>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[80px] leading-[80px] w-full mt-1 hero-content__name">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 32, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.9, ease: easeOut }}
          >
            <span className="hero-name-shimmer">{t.aboutMe.name}</span>
          </motion.span>
        </h1>

        <motion.p
          className="font-poppins font-normal text-[18px] leading-[30.8px] hero-content__intro max-w-[470px] mt-5"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.85, duration: 0.8, ease: easeOut }}
        >
          {t.aboutMe.intro}
        </motion.p>

        <div className="hero-content__sparks" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="hero-content__spark" style={{ "--i": i }} />
          ))}
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative min-h-[300px] sm:min-h-[380px]`}
      >
        <div className="relative z-[5] w-full max-w-[440px] px-4 mx-auto hero-visual-wrap">
          <FantasyHeroVisual />
          <LetsConnect className="planet-connect--hero" />
        </div>
        <div className="absolute z-[1] w-[65%] h-[65%] rounded-full bottom-20 left-1/2 -translate-x-1/2 white__gradient opacity-90" />
        <div className="absolute z-[0] w-[50%] h-[50%] rounded-full bottom-16 left-1/2 -translate-x-1/2 blue__gradient opacity-100" />
        <div className="absolute z-[0] w-[45%] h-[45%] rounded-full top-4 right-4 pink__gradient opacity-90" />
      </div>
    </section>
  );
};

export default Hero;
