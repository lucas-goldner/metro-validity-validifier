import React from "react";
import styles from "../styles/InfoArea.module.css";
import Image from "next/image";

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
          <div className={styles.infoRow}>
            <Image
              src="/bottle.jpg"
              alt="Amatwine bottle"
              width={332}
              height={427}
            />
            <div className={styles.statsContainer}>
              <StatsItem stat="bespoke number" value="648576" />
              <StatsItem stat="wine name" value="648576" />
              <StatsItem stat="lot number" value="648576" />
              <StatsItem stat="release year" value="648576" />
              <StatsItem stat="wine style" value="648576" />
              <StatsItem stat="total bottles" value="648576" />
              <StatsItem stat="bottle" value="648576" />
              <StatsItem stat="alcohol" value="648576" />
              <StatsItem stat="bottle style" value="648576" />
              <StatsItem stat="website" value="648576" />
              <StatsItem stat="verification number" value="648576" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const StatsItem = ({ stat, value }) => {
  return (
    <div className={styles.statsrow}>
      <p className={"white descFont"}>{stat}</p>
      <div className={"spacer"} />
      <p className={"white titleFont"}>{value}</p>
    </div>
  );
};

export default InfoArea;
