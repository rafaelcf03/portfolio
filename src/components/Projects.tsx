import "../styles/projects-section.css";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/configs";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("portfolioApp");

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {t("MY_PROJECTS")}
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/mtg-land-count.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>{t("LAND_CALCULATOR")}</h3>
          <p>{t("LAND_CALCULATOR_DESC")}</p>
          <div className="project-tech">
            <span>React</span>
            <span>Zod</span>
            <span>Material UI</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/lumel.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>{t("LUMEL")}</h3>
          <p>{t("LUMEL_DESC")}</p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/building.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>{t("EONIX")}</h3>
          <p>{t("EONIX_DESC")}</p>
          <div className="project-tech">
            <span>React</span>
            <span>Redux</span>
            <span>Material UI</span>
            <span>MQTT</span>
            <span>Firebase</span>
            <span>Zod</span>
            <span>Notistack</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
