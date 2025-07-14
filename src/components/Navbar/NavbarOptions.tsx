import "../../styles/navbar.css";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/configs";

export default function NavbarOptions({ isMobile }: { isMobile?: boolean }) {
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
          <a href="#home">Home</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
    </>
  );
}
