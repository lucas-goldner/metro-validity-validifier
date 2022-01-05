import React from "react";
import FooterIcon from "./FooterIcon";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div id={styles.footerrow}>
      <div className="spacer" />
      <div className="spacer" />
      <div className={styles.row}>
        <p className={"descFont"}>Imprint</p>
        <div className={"spacer"} />
        <p className={"descFont"}>Privacy</p>
      </div>
      <div className={styles.row}>
        <p>powered by</p>
        <div className={"spacer"} />
        <FooterIcon />
      </div>
    </div>
  );
};

export default Footer;
