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
              <p className={styles.bottleTitleLight}>
                No. {nftInfo.verification_number}
              </p>
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
              <StatsItem stat="bespoke number" value={nftInfo.number} />
              <StatsItem stat="wine name" value={nftInfo.wine_name} />
              <StatsItem stat="lot number" value={nftInfo.lot_number} />
              <StatsItem stat="release year" value={nftInfo.release_year} />
              <StatsItem stat="wine style" value={nftInfo.wine_style} />
              <StatsItem stat="total bottles" value={nftInfo.total_bottles} />
              <StatsItem stat="bottle" value={nftInfo.bottle} />
              <StatsItem stat="alcohol" value={nftInfo.alcohol} />
              <StatsItem stat="bottle style" value={nftInfo.bottle_style} />
              <StatsItem stat="website" value={nftInfo.website} />
              <StatsItem
                stat="verification number"
                value={nftInfo.verification_number}
              />
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
