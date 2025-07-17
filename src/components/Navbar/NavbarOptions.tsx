import "../../styles/navbar.css";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/configs";
import { useTranslation } from "react-i18next";

export default function NavbarOptions({ isMobile }: { isMobile?: boolean }) {
  const { t } = useTranslation("portfolioApp");

  return (
    <>
      <motion.ul
        className={`${isMobile ? "navMobileActive" : "nav-links"}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home">{t("HOME")}</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects">{t("PROJECTS")}</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact">{t("CONTACT")}</a>
        </motion.li>
      </motion.ul>
    </>
  );
}
