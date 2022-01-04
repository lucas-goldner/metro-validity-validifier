import React from "react";
import AboutIcon from "./AboutIcon";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section id={styles.aboutcontainer}>
      <AboutIcon />
      <h1 id={styles.title} className={"titleFont"}>
        Verify your
        <br />
        amatwine NFT
      </h1>
      <p id={styles.desc} className={"descFont"}>
        Log in via MetaMask
        <br /> to view the metadata
        <br /> of your bespoke NFT.
      </p>
    </section>
  );
};

export default About;
