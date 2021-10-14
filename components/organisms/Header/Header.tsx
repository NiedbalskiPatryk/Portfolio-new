import { motion } from 'framer-motion';
import React from 'react';
import styles from './Header.module.scss';
// import smoothscroll from 'smoothscroll-polyfill';

const Header = () => {
  // const variantsColumn = {
  //   start: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.8,
  //       delayChildren: 0.4,
  //       staggerChildren: 0.4,
  //     },
  //   },
  //   end: {
  //     x: '-100%',
  //     opacity: 0,
  //     transition: {
  //       duration: 0.8,
  //       delayChildren: 0.4,
  //       staggerChildren: 0.4,
  //     },
  //   },
  // };

  // const variantsGalleryWrapper = {
  //   start: {
  //     x: 0,
  //     transition: { delayChildren: 0.4, staggerChildren: 0.4 },
  //   },
  //   end: {
  //     x: '-200%',
  //     transition: { delayChildren: 0.4, staggerChildren: 0.4 },
  //   },
  // };

  // if (process.browser) {
  //   const about = document.getElementById('about');
  //   const header = document.getElementById('header');

  //   const myFunction = () => {
  //     if (window.pageYOffset > about.offsetTop) {
  //       header.style.position = 'fixed';
  //       header.style.top = '0px';
  //     } else {
  //       header.style.position = 'absolute';
  //     }
  //   };

  //   window.onscroll = function () {
  //     myFunction();
  //   };
  // }

  // const scrollDown = (el) => {
  //   window.scroll({
  //     top: el,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <header id='header2' className={styles.header}>
      <nav className={styles.nav}>
        <motion.ul initial='end' className={styles.ul}>
          <motion.li whileHover={{ scale: 1.1 }} className={styles.li}>
            about
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className={styles.li}>
            projects
          </motion.li>
          <li className={styles.logo}>Patryk Niedbalski</li>
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
