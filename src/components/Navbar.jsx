import { useState, useEffect } from "react";
import { close, menu } from "../assets";
import BrandLogo from "./BrandLogo";
import LanguageToggle from "./LanguageToggle";
import { scrollToSection } from "../lib/helperFunctions";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { getNavLinks } from "../i18n";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);
  const homeLabel = t.nav.homeAria(t.aboutMe.name);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="nav-styles sm:px-16 px-6"
    >
      <a href="#home" className="brand-logo-link" aria-label={homeLabel}>
        <BrandLogo size={46} />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 p-4">
        <li className="mr-6">
          <LanguageToggle />
        </li>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
            font-normal
            cursor-pointer
            text-[16px]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            text-white hover:text-teal-200`}
            onClick={() => scrollToSection(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
        <LanguageToggle />
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6
        bg-[#1e1654]/90 backdrop-blur-xl border border-white/10
        absolute top-20 right-0 mx-4 my-2
        min-w-[160px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
                font-normal
                cursor-pointer
                text-[16px]
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                text-white`}
              >
                <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
