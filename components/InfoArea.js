import React from "react";
import styles from "../styles/InfoArea.module.css";

const InfoArea = () => {
  return (
    <section id={styles.infocontainer}>
      <p className={"white desc"}>Please log in with MetaMask</p>
    </section>
  );
};

export default InfoArea;
