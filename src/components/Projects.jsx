import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { BsLink45Deg, BsArrowUpRight } from "react-icons/bs";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedProjects } from "../i18n";

const cardVariants = {
  hidden: { y: 32, opacity: 0, scale: 0.96 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const WIDE_CARD_INDEXES = new Set([0, 5]);

const Project = ({ index, labels, ...props }) => {
  const isWide = WIDE_CARD_INDEXES.has(index);

  return (
    <motion.a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={`project-card group ${isWide ? "project-card--wide" : ""}`}
      aria-label={labels.openProject(props.title)}
    >
      <span className="project-card__glow" aria-hidden="true" />
      <span className="project-card__border" aria-hidden="true" />
      <span className="project-card__orbit" aria-hidden="true" />

      <div className="project-card__top">
        <span className="experience-logo project-card__logo">
          <img src={props.image} alt="" className="experience-logo__img" />
        </span>
        <span className="project-card__open" aria-hidden="true">
          <BsArrowUpRight />
        </span>
      </div>

      <h2 className="project-card__title font-poppins font-semibold text-white group-hover:text-teal-100 transition-colors">
        {props.title}
      </h2>

      <p className="project-card__desc font-poppins text-dimWhite group-hover:text-white/90 transition-colors">
        {props.content}
      </p>

      <div className="project-card__footer">
        <p className="project-card__label font-poppins text-dimWhite">{labels.techStack}</p>
        <div className="project-card__stack">
          {props.stack.map((tech) => (
            <span key={tech.id} className="project-card__stack-pill">
              <span className="project-card__stack-icon">
                {React.createElement(tech.icon)}
              </span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <span className="project-card__visit font-poppins">
        {labels.visitSite}
        <BsLink45Deg />
      </span>
    </motion.a>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const localizedProjects = getLocalizedProjects(projects, t);
  const labels = {
    techStack: t.common.techStack,
    visitSite: t.common.visitSite,
    openProject: t.common.openProject,
  };

  return (
    <section id="projects" className="projects-section overflow-hidden relative">
      <div className="projects-section__aurora projects-section__aurora--1" aria-hidden="true" />
      <div className="projects-section__aurora projects-section__aurora--2" aria-hidden="true" />

      <motion.div
        className="relative z-[1]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
          {t.sections.projects.title}
        </h1>
        <p className="font-poppins text-dimWhite text-[17px] max-w-[640px] mt-2">
          {t.sections.projects.subtitle}
        </p>
      </motion.div>

      <div className="relative z-[1] container px-2 py-12 mx-auto mb-8">
        <div className="projects-bento">
          {localizedProjects.map((project, index) => (
            <Project key={project.id} index={index} labels={labels} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
