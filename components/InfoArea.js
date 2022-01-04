import React from "react";
import styles from "../styles/InfoArea.module.css";

const InfoArea = ({ nftInfo }) => {
  return (
    <section id={styles.infocontainer}>
      {nftInfo &&
      Object.keys(nftInfo).length === 0 &&
      Object.getPrototypeOf(nftInfo) === Object.prototype ? (
        <p className={"white desc"}>Please log in with MetaMask</p>
      ) : (
        <div className={styles.allInfos}>
          <div id={styles.titleRow}>
            <div className={styles.row}>
              <p className={styles.bottleTitle}>Amatwine Bottle</p>
              <p className={styles.bottleTitleLight}>No. 36</p>
            </div>
            <p className={styles.smallerText}>View on blockchain</p>
          </div>
          <div></div>
        </div>
      )}
    </section>
  );
};

export default InfoArea;
