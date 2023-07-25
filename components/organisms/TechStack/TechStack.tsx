import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./TechStack.module.scss";
import { Waypoint } from "react-waypoint";
import SectionTitle from "../../atomic/SectionTitle/SectionTitle";

const TechStack = () => {
  const variants = {
    start: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    end: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const variantsColumn = {
    start: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
    end: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
  };

  const variantsGalleryWrapper = {
    start: {
      transition: { delayChildren: 0.4, staggerChildren: 0.4 },
    },
    end: {
      transition: { delayChildren: 0.4, staggerChildren: 0.4 },
    },
  };

  const imagesDesktop = [
    {
      id: 0,
      photo: [
        { first: "ReactJS", second: <img src="/react.png" alt="" /> },
        {
          first: "JavaScript",
          second: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 24h24V0H0v24zm19.78-5.37c-.25-.96-2.25-1.19-3.61-2.2a3.14 3.14 0 01-.57-4.48 3.22 3.22 0 011.7-1l.71-.1c1.37-.02 2.2.34 2.84 1.04.18.18.31.36.58.78-.72.45-.72.45-1.75 1.13a1.63 1.63 0 00-.98-.9c-.6-.18-1.36.01-1.51.66-.06.2-.05.37.04.7.25.56 1.06.8 1.8 1.14 2.12.86 2.83 1.78 3 2.88L22 18.2c.16.94-.05 1.56-.08 1.65-.78 2.67-5.13 2.76-6.87 1-.36-.42-.6-.63-.8-1.1l1.82-1.06c.5.75.95 1.16 1.76 1.34 1.1.13 2.2-.24 1.96-1.41zm-11.65.35c.02 0 .07.09.13.2.23.38.43.65.83.85.39.12 1.24.2 1.57-.48.2-.35.13-1.48.13-2.71l.01-5.8h2.25V17.26c0 1.27.11 2.41-.4 3.34a2.8 2.8 0 01-1.81 1.41 4.4 4.4 0 01-3.2-.4A3.54 3.54 0 016.3 20.1l1.82-1.12z" />
            </svg>
          ),
        },
        {
          first: "TypeScript",
          second: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M6 6v36h36V6zm20.9 19h-4.69v13.76h-3V25h-4.64v-2.54H26.9zm5.39 14a9.42 9.42 0 01-4.41-1l.66-2.46a8.29 8.29 0 003.94 1c1.9 0 3-.89 3-2.22s-.82-2-2.89-2.71c-2.69-.95-4.41-2.39-4.41-4.73 0-2.67 2.23-4.68 5.77-4.68a8.66 8.66 0 013.91.81l-.71 2.4a7 7 0 00-3.26-.78c-1.89 0-2.69 1-2.69 2 0 1.25.94 1.84 3.11 2.67 2.84 1.08 4.2 2.5 4.2 4.84-.04 2.6-2.02 4.86-6.22 4.86z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: 2,
      photo: [
        {
          first: "Next.JS",
          second: (
            <svg
              viewBox="0.14 0.21 147.69 89.29"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 23.5h27.85v2.21h-25.3v16.7h23.79v2.22h-23.8v18.34h25.6v2.22H34.99zm30.34 0h2.96l13.12 18.33 13.4-18.33L113.05.2 83.1 43.77l15.44 21.43h-3.08l-14.04-19.5-14.1 19.5H64.3l15.55-21.43-14.5-20.26zm34.3 2.21V23.5h31.74v2.21h-14.62v39.47h-2.56V25.71H99.64zM.14 23.5h3.2l44 66-18.18-24.31L2.81 26.65 2.7 65.19H.14zm130.98 38.8a.9.9 0 01-.9-.93c0-.53.38-.93.9-.93.53 0 .92.4.92.93a.9.9 0 01-.92.93zm2.51-2.45H135c.02.75.56 1.24 1.35 1.24.9 0 1.4-.53 1.4-1.54V53.2h1.39v6.36c0 1.8-1.05 2.85-2.77 2.85-1.62 0-2.74-1.01-2.74-2.56zm7.33-.08h1.37c.12.86.95 1.4 2.15 1.4 1.12 0 1.94-.58 1.94-1.38 0-.68-.52-1.1-1.7-1.38l-1.16-.28c-1.62-.38-2.36-1.16-2.36-2.48 0-1.6 1.3-2.67 3.26-2.67 1.82 0 3.15 1.07 3.23 2.58h-1.36c-.13-.83-.85-1.35-1.9-1.35-1.1 0-1.82.53-1.82 1.34 0 .65.47 1.01 1.64 1.29l.98.24c1.84.43 2.6 1.18 2.6 2.53 0 1.72-1.33 2.8-3.45 2.8-1.99 0-3.33-1.03-3.43-2.64z" />
            </svg>
          ),
        },
        {
          first: "Gatsby",
          second: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#744C9E"
                d="M12 24c6.67 0 12-5.33 12-12 0-6.68-5.33-12-12-12S0 5.31 0 12c0 6.67 5.32 12 12 12zM2.6 12.1l9.29 9.29a9.3 9.3 0 01-9.29-9.3zM12 2.6a9.47 9.47 0 017.6 3.84l.01.02-1.35 1.15a7.66 7.66 0 00-6.33-3.34h-.09c-3.3 0-6.1 2.12-7.14 5.06l-.01.05 9.8 9.81a7.43 7.43 0 004.8-5.42h-4.06v-1.78h6.15a9.4 9.4 0 01-7.3 9.19L2.81 9.9A9.4 9.4 0 0112 2.6z"
              />
            </svg>
          ),
        },
        { first: "Create React App", second: <img src="/cra.png" alt="" /> },
      ],
    },
    {
      id: 3,
      photo: [
        {
          first: "MobX",
          second: (
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M256 236.4V19.6c0-8.89-5.92-16.4-14.04-18.8l-9.21 5.52-102.27 109.04-3.2 10.02-1.88 9.62 31.9 119.18 4.93 1.82h74.16A19.6 19.6 0 00256 236.4"
                fill="#EA6618"
              />
              <path
                d="M0 19.6v216.8c0 6.7 3.37 12.61 8.5 16.15l6.29-3.01 108.24-115.9 4.25-8.26.16-8L97.98 5.32 93.5 0h-73.9A19.6 19.6 0 000 19.6"
                fill="#d65813"
              />
              <path
                d="M127.28 125.38L241.96.81A19.6 19.6 0 00236.4 0H93.52l33.76 125.38z"
                fill="#e05e11"
              />
              <path
                d="M19.6 256h142.63l-34.95-130.62L8.5 252.55A19.51 19.51 0 0019.6 256"
                fill="#de5c16"
              />
              <path
                d="M94.92 97.03h14.22c5.67 21.39 12.12 40.15 19.32 57.09 8.15-19.05 14.13-37.83 19.18-57.1h13.45c-6.02 23.94-15.87 48.05-27.14 72.94h-11.89a505.77 505.77 0 01-27.14-72.93zM48 59.98h31.63V195.6H47.86v-10.45h19.47v-115H48V59.97zm160.17 10.17h-19.33v115h19.47v10.46h-31.77V59.97h31.63v10.18z"
                fill="#FFF"
              />
            </svg>
          ),
        },
        {
          first: "Redux",
          second: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.9 17.15a2.22 2.22 0 110-4.44 2.22 2.22 0 010 4.44zm0-2.93a.72.72 0 100 1.43.72.72 0 000-1.43z" />
              <path d="M5.5 24.02a5.5 5.5 0 01-4-1.52C-.98 20.02-.32 15.18 3.07 11a.75.75 0 011.16.95c-2.85 3.51-3.57 7.6-1.67 9.49 2.15 2.15 7.05.88 10.7-2.77.89-.88 1.64-1.84 2.26-2.86a.75.75 0 011.28.78 16.7 16.7 0 01-2.48 3.14c-2.78 2.78-6.07 4.29-8.82 4.29z" />
              <path d="M6.57 18.45A2.22 2.22 0 015 14.66c.84-.83 2.3-.83 3.14 0a2.22 2.22 0 01-1.57 3.79zm0-2.93a.72.72 0 00-.5 1.22c.27.27.74.27 1.01 0a.72.72 0 00-.5-1.22z" />
              <path d="M6.2 15.57a.75.75 0 01-.73-.57C5.16 13.73 5 12.4 5 11.02 5 4.84 8.12 0 12.1 0c3.52 0 6.47 3.89 7.02 9.24a.75.75 0 01-1.49.15c-.46-4.5-2.84-7.9-5.52-7.9-3.04 0-5.61 4.37-5.61 9.53 0 1.25.14 2.47.43 3.62a.75.75 0 01-.73.93z" />
              <path d="M10.52 11.44a2.23 2.23 0 01-2.03-1.31 2.23 2.23 0 012.82-2.97 2.22 2.22 0 01-.8 4.29zm0-2.93a.72.72 0 00-.26 1.39c.18.06.37.06.55-.02a.72.72 0 00-.3-1.37zm-.6-.63h.01z" />
              <path d="M16.5 24c-1.24 0-2.59-.18-3.96-.55a.75.75 0 11.39-1.45c4.37 1.18 8.39.19 9.35-2.32.51-1.33.13-2.95-1.09-4.55a13.22 13.22 0 00-5.78-4.1 15.06 15.06 0 00-3.53-.9.75.75 0 11.19-1.5c1.3.17 2.6.5 3.88 1a14.74 14.74 0 016.43 4.59c1.55 2.03 2 4.16 1.3 6-.93 2.4-3.7 3.78-7.17 3.78z" />
            </svg>
          ),
        },
      ],
    },

    {
      id: 4,
      photo: [
        { first: "Axios", second: <img src="/axios.png" alt="" /> },
        {
          first: "Apollo",
          second: (
            <svg
              viewBox="-64 -42 972.6 331.6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#333">
                <path d="M137.6 72.4h-24.3l-35.1 91.1h22l5.7-15.5h33.2l-6-17h-21.9l14.2-39.2 25.3 71.7h22zm369.3 91.1V72.4h19.5v74h38.5v17.1zm112.5 0V72.4H639v74h38.5v17.1zM398.7 88.7c16.2 0 29.3 13.1 29.3 29.3s-13.1 29.3-29.3 29.3-29.3-13.1-29.3-29.3 13.2-29.3 29.3-29.3m0-17.8c-26 0-47.1 21.1-47.1 47.1s21.1 47.1 47.1 47.1 47.1-21.1 47.1-47.1-21.1-47.1-47.1-47.1zm368.6 17.8c16.2 0 29.3 13.1 29.3 29.3s-13.1 29.3-29.3 29.3S738 134.2 738 118s13.1-29.3 29.3-29.3m0-17.8c-26 0-47.1 21.1-47.1 47.1s21.1 47.1 47.1 47.1 47.1-21.1 47.1-47.1-21.1-47.1-47.1-47.1zM272 72.4h-42.5v91.1h19.4v-31.4H272c16.2 0 29.3-13.7 29.3-29.9 0-16.1-13.1-29.8-29.3-29.8zm0 41.9h-23.1V90.2H272c6.3 0 11.5 5.7 11.5 12s-5.2 12.1-11.5 12.1z" />
                <path d="M212.8 191.1c-1.7 0-3.2.8-4.1 2.1 0 0-4.4 5-6.7 7.4-10 10-21.6 17.8-34.5 23.3-13.4 5.7-27.6 8.5-42.3 8.5s-28.9-2.9-42.3-8.5c-12.9-5.5-24.6-13.3-34.5-23.3-10-10-17.8-21.6-23.3-34.5-5.7-13.4-8.5-27.6-8.5-42.3s2.9-28.9 8.5-42.3C30.5 68.6 38.3 56.9 48.3 47c10-10 21.6-17.8 34.5-23.3 13.4-5.7 27.6-8.5 42.3-8.5s28.9 2.9 42.3 8.5c9.4 4 18.1 9.2 26 15.6-.4 1.2-.7 2.6-.7 4a12.3 12.3 0 1024.6 0c0-6.8-5.5-12.3-12.3-12.3-1.7 0-3.3.3-4.7 1a118.08 118.08 0 00-75.2-26.9C59.6 5.1 6.5 58.2 6.5 123.8s53.1 118.7 118.7 118.7c36.7 0 69.4-16.6 91.2-42.8.9-.9 1.5-2.2 1.5-3.5-.1-2.8-2.4-5.1-5.1-5.1z" />
              </g>
              <path d="M908.6 289.6H-64V-42h972.6z" fill="none" />
            </svg>
          ),
        },
      ],
    },
    {
      id: 8,
      photo: [
        { first: "Framer motion", second: <img src="/motion.png" alt="" /> },
        {
          first: "React spring",
          second: <img src="/reactspring.png" alt="" />,
        },
        { first: "Pure css animations", second: <img src="/css.png" alt="" /> },
      ],
    },
    {
      id: 1,
      photo: [
        { first: "CSS", second: <img src="/css.png" alt="" /> },
        { first: "SASS", second: <img src="/sass.png" alt="" /> },
        { first: "CSS Modules", second: <img src="/css-modules.png" alt="" /> },
        {
          first: "Styled components",
          second: <img src="/styledcomp.png" alt="" />,
        },
      ],
    },
    {
      id: 5,
      photo: [
        { first: "Rest API", second: <img src="/restapi.png" alt="" /> },
        { first: "GraphQL", second: <img src="/graphql.png" alt="" /> },
      ],
    },
    {
      id: 7,
      photo: [
        { first: "GIT", second: <img src="/git.png" alt="" /> },
        { first: "NPM", second: <img src="/npm.png" alt="" /> },
        { first: "yarn", second: <img src="/yarn.png" alt="" /> },
      ],
    },
  ];
  const [startAnimationTech, setStartAnimationTech] = useState(false);
  return (
    <section id="techstack" className={styles.stack}>
      <Waypoint topOffset={100} onEnter={() => setStartAnimationTech(true)} />
      <SectionTitle>tech stack</SectionTitle>
      <motion.ul
        animate={startAnimationTech && "start"}
        initial="end"
        variants={variantsGalleryWrapper}
      >
        {imagesDesktop.map((column, i) => (
          <motion.li
            key={i}
            i={i}
            variants={variantsColumn}
            style={
              (i === 0 && { marginTop: "100px" }) ||
              ((i === 2 || i === 4 || i == 7) && { marginTop: "90px" }) ||
              (i === 3 && { marginTop: "130px" }) ||
              (i === 5 && { marginTop: "0px" }) ||
              (i === 6 && { marginTop: "150px" })
            }
          >
            {column.photo.map((image, index) => (
              <motion.span
                className={styles.wrapper}
                key={index}
                i={index}
                variants={variants}
              >
                {image.second}
                <span>{image.first}</span>
              </motion.span>
            ))}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default TechStack;
