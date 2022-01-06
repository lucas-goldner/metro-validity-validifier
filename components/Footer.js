import React from "react";
import FooterIcon from "./FooterIcon";
import styles from "../styles/Footer.module.css";
import { useWindowWidth } from "@react-hook/window-size";

const Footer = () => {
  const width = useWindowWidth();
  return (
    <div id={styles.footerrow}>
      {width >= 1024 && (
        <>
          <div className="spacer" />
          <div className="spacer" />
        </>
      )}
      <div className={styles.row}>
        <p
          onClick={() => window.open("https://www.amatwine.com/legal")}
          className={styles.footerText}
        >
          Imprint
        </p>
        <div className={"spacer"} />
        <p
          onClick={() => window.open("https://www.amatwine.com/lega-page")}
          className={styles.footerText}
        >
          Privacy
        </p>
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
