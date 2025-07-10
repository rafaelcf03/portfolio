import "../styles/hero-section.css";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { staggerContainer, fadeInUp } from "../utils/configs";

export default function Hero() {
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
            <span>🐺 Hello, I'm</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Rafael de Castro
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            FullStack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Developer with 4+ years of experience in front-end and back-end
            development, working with Python, TypeScript, Django, Angular, and
            React. My primary interest lies in back-end development. I have
            experience in the education sector and currently work in the IoT
            industry. I am always striving to stay up to date and enhance my
            technical skills, particularly in Python. Self-taught and driven by
            challenges, I enjoy stepping out of my comfort zone.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
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
              {`const aboutMe: DeveloperProfile = {
    codename: "Rafael de Castro",
    origin: "🌍 Somewhere between a coffee shop and a terminal",
    role: "Fullstack Web Warlock",
    stack: {
      languages: ["Python", "Javascript", "Typescript", "SQL"]
      frameworks and tools: [
        "React", "Django", "TailwindCSS", 
        "FastAPI", "Flask", "Angular", 
        "Git", "MySQL", "NoSQL"
      ],
    },
    traits: [
      "self-taught",
      "tech enthusiast",
      "dark mode advocate",
      "",
    ],
    missionStatement:
      "Turning ideas into interfaces and bugs into feature",
    availability: "Needs discussion",
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
              <span className="card-text">
                Currently working at Eonix Technology
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
