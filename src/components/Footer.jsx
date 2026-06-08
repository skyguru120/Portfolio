import React from "react";
import Button from "./Button";
import { socialMedia } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";
import { resumeLink } from "../constants";
import { AiFillFilePdf } from "react-icons/ai";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contactMe" className="bg-[#12082a]/60 backdrop-blur-md border-t border-white/10 sm:px-16 px-6">
      <div
        className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
      >
        <div className={` ${layout.sectionInfo}`}>
          <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
            {t.aboutMe.name}
          </h2>
          <p
            className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
          >
            {t.aboutMe.tagLine}
          </p>
          <div className="flex flex-row mt-4">
            {socialMedia.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                key={social.id}
                index={index}
                className="text-white mr-5 text-[25px] hover:text-teal-200"
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2">
            <a href={resumeLink} target="_blank">
              <Button
                styles="mt-10 mr-3 inline-flex items-center justify-center"
                text={t.common.resume}
                icon={AiFillFilePdf}
              />
            </a>
          </div>
        </div>

        <div className="md:ml-auto mt-10 md:mt-0">
          <img
            src={profilePic}
            alt={t.aboutMe.name}
            className="w-[200px] h-[200px] border-2 border-teal-200 relative z-[5] rounded-full"
          />
        </div>
      </div>
      <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
        <p>{t.common.madeWith(t.aboutMe.name)}</p>
      </div>
    </footer>
  );
};

export default Footer;
