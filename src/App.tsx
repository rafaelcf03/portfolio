import "./styles/app.css";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import emailjs from "@emailjs/browser";
import { EMAILJS_PUBLIC_KEY } from "./utils/configs";

export default function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={isLoaded ? "app loaded" : "app"}>
      <Navbar />

      <Hero />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}
