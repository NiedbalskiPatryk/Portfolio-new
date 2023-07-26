import React from "react";
import styles from "./About.module.scss";

import { motion } from "framer-motion";
import SectionTitle from "../../atomic/SectionTitle/SectionTitle";
import Image from "next/image";

const About = () => {
  // const OtherComponent = loadable(
  //   () => import("../../molecules/Particles/Particles")
  // );

  const arrow = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  // const images = useStaticQuery(graphql`
  //   query {
  //     papi: file(relativePath: { eq: "/papi.jpg" }) {
  //       id
  //       childImageSharp {
  //         fluid(maxWidth: 1440, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <section id="about" className={styles.about}>
      {/* <Image src="/copy.jpg" layout="fill" /> */}
      <SectionTitle>Home</SectionTitle>
      {/* <OtherComponent /> */}
      {/* <Img
        // imgStyle={{ objectFit: "cover" }}
        // className={styles.img}
        fluid={images.papi.childImageSharp.fluid}
        // alt="footer-background"
      /> */}
      <div className={styles.central}>
        <p>
          Hello world! My name is Patryk Niedbalski. I am 29 years old Front-end
          developer from Warsaw - Poland.
          <br /> I started my adventure with programming quite recently - at the
          end of 2019, but since then I have been constantly learning and
          developing my skills. <br />
          At the beginning of 2020, I completed a two-month stationary
          CodersLab: Front-end React developer bootcamp, and from April 1 I
          started working in the liteweb.io software house where I have been
          working so far. <br /> Before starting work as a developer, I worked
          for 5 years in an event agency -h8mnday.com - as an event manager, so
          my soft skills / organize are at a high level. I really enjoy working
          in a team to create great applications - it gives me great
          satisfaction. When creating User Interface views, I attach great
          importance to every detail. I also like to create animation and
          develop projects at a later stage. I know the concept of agile
          manifesto, scrum methodology. I don't like wasting time, I prefer to
          work to deliver a minimum value product as soon as possible. In my
          free time, I spend time with my loved ones, play football, travel and
          read inspiring books. I also enjoy every type of street art. I love
          life.
          <br />
          The online courses I have completed are:
          <br />
          <br />
          <motion.a
            className={styles.link}
            href="https://www.udemy.com/share/101ZquCUcTc11TRXw=/"
          >
            Web developer in 15days
          </motion.a>
          <motion.a
            className={styles.link}
            href="https://www.udemy.com/share/1021B8CUcTc11TRXw=/"
          >
            Front-end advanced in 15days
          </motion.a>
          <motion.a
            className={styles.link}
            href="https://www.udemy.com/share/101XX8CUcTc11TRXw=/"
          >
            Developing in JS
          </motion.a>
          <motion.a
            className={styles.link}
            href="https://www.udemy.com/share/101xmaCUcTc11TRXw=/"
          >
            React basics
          </motion.a>
          <motion.a
            className={styles.link}
            href="https://www.udemy.com/share/101AgkCUcTc11TRXw=/"
          >
            Introducing to Git and GitHub
          </motion.a>
        </p>
      </div>
      {/* <motion.div
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
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            loop: Infinity,
            repeatDelay: 0.5,
          }}
          className={styles.moveForward}
        >
          <i className={`fas fa-angle-double-down ${styles.icon}`}></i>
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default About;
