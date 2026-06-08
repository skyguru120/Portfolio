import en from "./en";
import ja from "./ja";
import { navLinks as navLinkIds } from "../constants";

export const translations = { en, ja };

export const getNavLinks = (t) =>
  navLinkIds.map((link) => ({
    ...link,
    title: t.navLinks[link.id] ?? link.title,
  }));

export const getLocalizedSkills = (skills, t) =>
  skills.map((skill, index) => ({
    ...skill,
    title: t.skillCategories[index] ?? skill.title,
  }));

export const getLocalizedEducation = (educationList, t) =>
  educationList.map((item, index) => ({
    ...item,
    ...(t.educationList[index] ?? {}),
  }));

export const getLocalizedAchievements = (achievements, t) =>
  achievements.map((item, index) => ({
    ...item,
    ...(t.achievements[index] ?? {}),
  }));

export const getLocalizedExperiences = (experiences, t) =>
  experiences.map((exp, expIndex) => ({
    ...exp,
    positions: exp.positions.map((position, posIndex) => {
      const localized = t.experiences[expIndex]?.positions[posIndex];
      if (!localized) return position;

      return {
        ...position,
        title: localized.title,
        duration: localized.duration,
        content: position.content.map((entry, contentIndex) => ({
          ...entry,
          text: localized.content[contentIndex] ?? entry.text,
        })),
      };
    }),
  }));

export const getLocalizedProjects = (projects, t) =>
  projects.map((project, index) => ({
    ...project,
    content: t.projects[index] ?? project.content,
  }));
