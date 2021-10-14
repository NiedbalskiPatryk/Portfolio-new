import React from 'react';
import styles from './Hero.module.scss';
import ChangingText from '../ChangingText/ChangingText';

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <ChangingText
        words={[
          'Hello on my portfolio',
          'Witam na moim portfolio',
          'Bienvenido a mi portafolio',
        ]}
      />
    </div>
  );
};

export default Hero;
