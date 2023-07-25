import React from "react";
import SectionTitle from "../../atomic/SectionTitle/SectionTitle";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <SectionTitle>Contact</SectionTitle>
      <a href="mailto:patrykndev@gmail.com">patrykndev@gmail.com</a>
      <div className={styles.socials}>
        <a target="_blank" href="https://github.com/NiedbalskiPatryk">
          <i className="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/patryk-niedbalski-3146bb102/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a target="_blank" href="https://www.facebook.com/papizaur/">
          <i className="fab fa-facebook-f"></i>
        </a>{" "}
      </div>
      <div className={styles.copy}>patryk niedbalski - papi - 2021r.</div>
    </section>
  );
};

export default Contact;
