import React from "react";
import Image from "next/image";
import ConnectWallet from "./ConnectWallet";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ setAccount }) => {
  return (
    <nav id={styles.navbar}>
      <Image src="/amat.jpg" alt="Amat brand logo" width={116} height={116} />
      <ConnectWallet setAccount={setAccount} />
    </nav>
  );
};

export default Navbar;
