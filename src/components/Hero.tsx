import "../styles/hero-section.css";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { staggerContainer, fadeInUp } from "../utils/configs";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation("portfolioApp");

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>🐺 {t("GREETING")}</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Rafael de Castro
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {t("FULLSTACK")}
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            {t("BIO")}
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("VIEW_MY_WORK")}
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("CONTACT_ME")}
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/rafaelcf03" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rafaelcf03/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
            >
              {`const ${t("ABOUT_ME")}: DeveloperProfile = {
    ${t("CODENAME")}: "Rafael de Castro",
    ${t("ORIGIN")}: "🌍 ${t("ORIGIN_TEXT")}",
    ${t("ROLE")}: "Fullstack Web Warlock",
    ${t("STACK")}: {
      ${t("LANGUAGES")}: ["Python", "Javascript", "Typescript", "SQL"]
      ${t("FRAMEWORKS_TOOLS")}: [
        "React", "Django", "TailwindCSS", 
        "FastAPI", "Flask", "Angular", 
        "Git", "MySQL", "NoSQL"
      ],
    },
    ${t("FACTS")}: [
      "self-taught",
      "tech enthusiast",
      "dark mode advocate",
      "martial arts enthusiast",
      "dog/wolf person"
    ],
    ${t("MISSION")}:
      "${t("MISSION_TEXT")}",
    ${t("AVAILABILITY")}: "${t("AVAILABILITY_TEXT")}",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">{t("CURRENT_JOB")}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
