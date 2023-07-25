import { motion } from "framer-motion";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <header id="header" className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <motion.li
            whileHover={{ scale: 1.1 }}
            variants={item}
            className={styles.li}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            variants={item}
            className={styles.li}
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            variants={item}
            className={styles.li}
          >
            Tech stack
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            variants={item}
            className={styles.li}
          >
            Blog
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            variants={item}
            className={styles.li}
          >
            Contact
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
