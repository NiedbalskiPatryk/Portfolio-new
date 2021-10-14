import React from 'react';
import styles from './SectionTitle.module.scss';
import { Bounce } from 'react-awesome-reveal';

const SectionTitle = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Bounce delay={500} triggerOnce>
        <div className={styles.title}>
          {children}
          <span>{children}</span>
        </div>
      </Bounce>
    </div>
  );
};

export default SectionTitle;
