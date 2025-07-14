import "../styles/navbar.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useMedia from "../../hooks/useMedia";
import NavbarOptions from "./NavbarOptions";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const isMobile = useMedia("(max-width: 40rem)");
  console.log(isMobile);

  useEffect(() => {
    setMobileMenu(false);
  }, []);

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
    </motion.nav>
  );
}
