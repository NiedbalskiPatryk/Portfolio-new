import React from 'react';
import styles from './FrontImage.module.scss';

const FrontImage = () => {
  return (
    <div className={styles.avatarWrapper}>
      <img className={styles.avatar} src='/FrontImage/ja.png' alt='me' />
      <img className={styles.circle} src='/FrontImage/green.svg' alt='green' />
      <img className={styles.crown} src='/FrontImage/crown.png' alt='crown' />
    </div>
  );
};

export default FrontImage;
