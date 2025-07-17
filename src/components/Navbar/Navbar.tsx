import "../../styles/navbar.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useMedia from "../../hooks/useMedia";
import NavbarOptions from "./NavbarOptions";
import { fadeInUp } from "../../utils/configs";
import { useTranslation } from "react-i18next";

const languages = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português (BR)" },
};

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const { i18n } = useTranslation();

  const isMobile = useMedia("(max-width: 40rem)");

  useEffect(() => {
    setMobileMenu(false);
  }, []);

  const handleLanguageChange = (lang: string) => {
    console.log(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🐺 | RC
      </motion.div>

      <motion.div className="navbarOptions">
        {/* <motion.button
          className="languageBtn"
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLanguageChange}
        >
          <i className="fa-solid fa-language fa-2xl"></i>
        </motion.button> */}
        <motion.div className="btnWrapper">
          {Object.keys(languages).map((lng) => (
            <motion.button
              key={lng}
              className="languageBtn"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageChange(lng)}
            >
              <i
                className="fa-solid fa-language fa-lg"
                style={{ paddingRight: "0.5rem" }}
              ></i>
              {languages[lng as keyof typeof languages].nativeName}
            </motion.button>
          ))}
        </motion.div>

        {isMobile ? (
          <>
            <button
              aria-label="Menu"
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`mobileBtn ${mobileMenu && "mobileBtnActive"}`}
            ></button>

            <nav className={`navMobile ${mobileMenu && "navMobileActive"}`}>
              <NavbarOptions isMobile={isMobile} />
            </nav>
          </>
        ) : (
          <NavbarOptions />
        )}
      </motion.div>
    </motion.nav>
  );
}
