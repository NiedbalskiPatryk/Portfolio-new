import { motion } from "framer-motion";
import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header id="header2" className={styles.header}>
      <nav className={styles.nav}>
        <motion.ul initial="end" className={styles.ul}>
          <motion.li whileHover={{ scale: 1.1 }} className={styles.li}>
            about
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className={styles.li}>
            projects
          </motion.li>
          <li className={styles.logo}>
            Dev{" "}
            <div className={styles.img}>
              <Image width={50} height={50} src="/FrontImage/ja.png" alt="" />{" "}
            </div>
            Papi
          </li>
          <motion.li whileHover={{ scale: 1.1 }} className={styles.li}>
            tech stack
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className={styles.li}>
            contact
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
