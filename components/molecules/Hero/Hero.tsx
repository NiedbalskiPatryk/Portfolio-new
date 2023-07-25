import React from "react";
import styles from "./Hero.module.scss";
import ChangingText from "../ChangingText/ChangingText";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      {/* <Image
        // className={styles.heroImg}
        layout="fill"
        objectFit="cover"
        src="/hero.jpg"
        alt="hero-image"
      /> */}
      <ChangingText
        words={[
          "Hello on my portfolio",
          "Witam na moim portfolio",
          "Bienvenido a mi portafolio",
        ]}
      />
    </div>
  );
};

export default Hero;
