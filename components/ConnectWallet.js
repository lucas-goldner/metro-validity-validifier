import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/ConnectWallet.module.css";
import { ethers } from "ethers";

const ConnectWallet = ({ setAccount }) => {
  const [buttonText, setButtonText] = useState("Connect to MetaMask");
  const [hover, setHover] = useState(false);

  const connectToMetaMask = async () => {
    try {
      const newAccounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let accounts = newAccounts;
      setAccount({ accounts });
      setButtonText("Connected to Metamask");
    } catch (error) {
      console.error(error);
      setButtonText("Error occured");
    }
  };

  return (
    <button
      id={
        buttonText === "Connected to Metamask"
          ? styles.metamasksuccess
          : styles.metamask
      }
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        connectToMetaMask();
      }}
    >
      {buttonText === "Connected to Metamask" ? (
        <Image
          src="/metamask_fox_color.png"
          alt="Metamask logo connected"
          width={30}
          height={30}
          className={styles.metamaskicon}
        />
      ) : (
        <Image
          src="/metamask_fox_nocolor.png"
          alt="Metamask logo disconnected"
          width={30}
          height={30}
          className={styles.metamaskicon}
        />
      )}
      <p
        className={
          buttonText === "Connected to Metamask"
            ? styles.metamasktext
            : hover
            ? styles.metamasktextblack
            : styles.metamasktext
        }
      >
        {buttonText}
      </p>
    </button>
  );
};

export default ConnectWallet;
