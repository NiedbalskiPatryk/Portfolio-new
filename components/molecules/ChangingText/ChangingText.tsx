import React from 'react';

import styles from './ChangingText.module.scss';

import Typewriter from 'typewriter-effect';

interface Props {
  words: string | string[];
}

const ChangingText: React.FC<Props> = ({ words }) => {
  return (
    <Typewriter
      options={{
        strings: words,
        autoStart: true,
        loop: true,
        wrapperClassName: styles.changingTexts,
        cursorClassName: styles.cursor,
        cursor: '.',
      }}
    />
  );
};

export default ChangingText;
