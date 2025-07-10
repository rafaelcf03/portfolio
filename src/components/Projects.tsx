import "../styles/projects-section.css";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/configs";

export default function Projects() {
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
        My Projects
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
          <h3>MTG Land Calculator</h3>
          <p>
            One of my first projects built in React and Vite. A simple form that
            returns how many lands is recommended for your deck, applying an
            algorithm developed by Frank Karsten.
          </p>
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
          <h3>Lumel Landing Page</h3>
          <p>
            A simple page for an apiary, built with React and TailwindCSS. My
            goal is to upgrade this page to be an ecommerce in the future.
          </p>
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
          <h3>Eonix Building</h3>
          <p>
            A modern SaaS platform built with Fuse React template, featuring IoT
            services.
          </p>
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
