import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { motion } from "framer-motion";
import { LinkPreview } from "./LinkPreview";
import { achievements } from "../constants";
import styles from "../style";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedAchievements } from "../i18n";

const cardVariants = {
  hidden: { y: 28, opacity: 0, scale: 0.96 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Achievements = () => {
  const { t } = useLanguage();
  const localizedAchievements = getLocalizedAchievements(achievements, t);

  return (
    <section className="achievements-section text-white mt-5 md:mt-10 relative" id="achievements">
      <div className="achievements-section__aurora achievements-section__aurora--1" aria-hidden="true" />
      <div className="achievements-section__aurora achievements-section__aurora--2" aria-hidden="true" />

      <div className={`relative z-[1] ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
              {t.sections.achievements.title}
            </h1>
            <p className="font-poppins text-dimWhite text-[17px] max-w-[640px] mt-2 mb-2">
              {t.sections.achievements.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      <div className={`relative z-[1] ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="container px-2 py-10 mx-auto mb-8">
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
              {localizedAchievements.map((achievement, index) => (
                <AchievementCard key={achievement.id} index={index} {...achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementCard = (props) => {
  const bullets = [props.content1, props.content2, props.content3].filter(Boolean);

  return (
    <motion.div
      custom={props.index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="achievement-card group"
    >
      <span className="achievement-card__glow" aria-hidden="true" />
      <span className="achievement-card__border" aria-hidden="true" />

      <div className="achievement-card__header">
        <span className="experience-logo achievement-card__logo">
          <img
            src={props.icon}
            alt={props.event}
            className="experience-logo__img"
          />
        </span>
        <div className="achievement-card__titles">
          <p className="font-poppins font-semibold text-lg text-white leading-snug group-hover:text-teal-100 transition-colors">
            {props.event}
          </p>
          <p className="font-poppins italic text-sm text-gradient mt-1">{props.position}</p>
        </div>
      </div>

      <ul className="achievement-card__list mt-4 space-y-2">
        {bullets.map((text, i) => (
          <li
            key={i}
            className="font-poppins text-dimWhite text-sm leading-relaxed flex gap-2 group-hover:text-white/90 transition-colors"
          >
            <span className="achievement-card__bullet" aria-hidden="true" />
            <span>{text}</span>
          </li>
        ))}
      </ul>

      {props.tags?.length > 0 && (
        <div className="achievement-card__tags mt-5 flex flex-wrap gap-2">
          {props.tags.map((tag) => (
            <span key={tag} className="achievement-card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {(props.article || props.youtube || props.github || props.project) && (
        <div className="flex flex-row mt-5 font-poppins text-dimWhite gap-3">
          {props.article && (
            <LinkPreview url={props.article}>
              <a
                href={props.article}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all"
              >
                <TiNews size="1.5rem" />
              </a>
            </LinkPreview>
          )}
          {props.youtube && (
            <LinkPreview url={props.youtube} className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all">
              <a href={props.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <FaYoutube size="1.5rem" />
              </a>
            </LinkPreview>
          )}
          {props.github && (
            <LinkPreview url={props.github} className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all">
              <a href={props.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <AiFillGithub size="1.5rem" />
              </a>
            </LinkPreview>
          )}
          {props.project && (
            <LinkPreview url={props.project} className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all">
              <a href={props.project} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <BsLink45Deg size="1.5rem" />
              </a>
            </LinkPreview>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Achievements;
