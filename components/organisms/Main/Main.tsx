import React from "react";

import styles from "./Main.module.scss";
import { motion } from "framer-motion";
import scrollTo from "gatsby-plugin-smoothscroll";

const Main = () => {
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

  const logo = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };

  const central = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 300 },
  };

  const arrow = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const rect = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -1000 },
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logo}
            transition={{
              duration: 0.5,
            }}
            className={styles.logo}
          >
            Patryk Niedbalski
          </motion.div>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={list}
            className={styles.ul}
          >
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
          </motion.ul>
        </nav>
      </header>
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={rect}
        transition={{
          duration: 2,
        }}
        className={styles.whiteRect}
      /> */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={central}
        transition={{
          duration: 1,
        }}
        className={styles.central}
      >
        <h1>
          Hi! <strong></strong>{" "}
          <motion.span whileHover={{ scale: 1.1 }}>
            I'm Patryk Niedbalski
          </motion.span>
          a Front-end developer
        </h1>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={arrow}
        transition={{
          duration: 1,
        }}
        className={styles.iconWrapper}
        onClick={() => window !== undefined && scrollTo("#about")}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          className={styles.moveForward}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            loop: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <i className={`fas fa-angle-double-down ${styles.icon}`}></i>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Main;
