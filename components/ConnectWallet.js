import React, { useState } from "react";
import { ethers } from "ethers";

const ConnectWallet = ({ setAccount }) => {
  const [buttonText, setButtonText] = useState("Connect to MetaMask");
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
      onClick={() => {
        connectToMetaMask();
      }}
    >
      {buttonText}
    </button>
  );
};

export default ConnectWallet;
