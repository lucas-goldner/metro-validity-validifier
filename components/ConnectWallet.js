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
      // const signer = provider.getSigner();
      // const address = await signer.getAddress();
      // setAccount(address);

      // const networkId = await provider.getNetwork();
      // console.log(networkId);

      // setButtonText("Connected to Metamask");
      fetchNFTs("0x746Dc9D8fdeCd183d3F5Dd33F2374c5C8E8173Ff");

      //setNetworkId(networkId);
      // if(chainId !== 8001)

      // for erc721 mainnet and testnet
      // setContract_721(
      //   new ethers.Contract("0xD05a795d339886bB8Dd46cfe2ac009d7f1E48A64", abi)
      // );

      // for erc1155 mainnet
      // if (networkId == "137")
      //   setContract_1155(
      //     new ethers.Contract(
      //       "0xd52a86110c9a7597a057Ae2bB4F577B6CD42a639",
      //       abi_1155
      //     )
      //   );
      // // for erc1155 testnet
      // else
      //   setContract_1155(
      //     new ethers.Contract(
      //       "0x692d14f95012778aBb720Be8510f8eAeEaf74F44",
      //       abi_1155
      //     )
      //   );

      // console.log(contract_721, contract_1155);
    };
    if (provider) getAddress();
    //else setSignerAddress("");
  }, [provider]);

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
