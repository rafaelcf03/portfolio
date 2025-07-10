import "../styles/contact-section.css";
import { motion } from "framer-motion";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  fadeInUp,
} from "../utils/configs";
import emailjs from "@emailjs/browser";
import { useState, type ChangeEvent, type FormEvent } from "react";

type FormType = {
  name: string;
  email: string;
  message: string;
};

type FormStatusType = {
  submitting: boolean;
  success: boolean;
  error: boolean;
  message: string;
};

const formDefaultValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormType>(formDefaultValues);

  const [formStatus, setFormStatus] = useState<FormStatusType>({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    if (!formStatus.submitting) {
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

        setFormStatus({
          submitting: false,
          success: true,
          error: false,
          message: "Message sent successfully!",
        });

        setFormData(formDefaultValues);
      } catch (error) {
        if (error instanceof Error) {
          setFormStatus({
            submitting: false,
            success: false,
            error: true,
            message: error.message,
          });
        }
      }
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.div className="contact-content" variants={fadeInUp}>
        <motion.form className="contact-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your name..."
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your email..."
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <motion.textarea
            name="message"
            placeholder="Your message..."
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />

          <motion.button
            className="submit-btn"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </motion.button>

          {formStatus.message && (
            <motion.div
              className={`form-status ${
                formStatus.success ? "success" : "error"
              }`}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
