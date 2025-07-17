import { useTranslation } from "react-i18next";
import "../styles/footer.css";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useTranslation("portfolioApp");

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p>&copy; 2025 Rafael de Castro. {t("ALL_RIGHTS")}.</p>
    </motion.footer>
  );
}
