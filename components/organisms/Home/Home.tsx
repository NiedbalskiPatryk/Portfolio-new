import React from 'react';
import styles from './Home.module.scss';
import loadable from '@loadable/component';
import { motion } from 'framer-motion';
import Button from '../../atoms/Button/Button';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Header from '../Header/Header';

const Home = () => {
  const OtherComponent = loadable(() => import('../../molecules/Particles/Particles'));

  const central = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 300 },
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bg}>
        <OtherComponent />
      </div>
      <div className={styles.content}>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={central}
          transition={{
            duration: 1,
          }}
          className={styles.central}
        >
          <h1>
            Hi! <strong></strong>{' '}
            <motion.span whileHover={{ scale: 1.1 }}>I'm Patryk Niedbalski</motion.span>a
            Front-end developer
          </h1>
        </motion.div>
        <Button
          buttonStyle='main'
          txtHover='Click!'
          onClick={() => window !== undefined && scrollTo('#header')}
        >
          View my works
        </Button>
      </div>
    </div>
  );
};

export default Home;
