import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/ConnectWallet.module.css";
import { ethers } from "ethers";
import { useWeb3Modal } from "../hooks/web3";

const ConnectWallet = ({ setAccount, fetchNFTs }) => {
  const [buttonText, setButtonText] = useState("Connect to MetaMask");
  const [hover, setHover] = useState(false);
  const { connectWallet, disconnectWallet, provider, error } = useWeb3Modal();

  useEffect(() => {
    const getAddress = async () => {
      const networkId = await provider.getNetwork();
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      setButtonText("Connected to Metamask");
      fetchNFTs(address, networkId.chainId);
    };
    if (provider) getAddress();
    //else setSignerAddress("");
  }, [provider]);

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
        connectWallet();
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
