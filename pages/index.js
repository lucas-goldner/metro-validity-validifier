import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import About from "../components/About";
import InfoArea from "../components/InfoArea";
import Footer from "../components/Footer";
import Web3 from "web3";
import abiDecoder from "abi-decoder";
import amatwinecontract from "../config/amatwine.json";

export default function Home() {
  const [account, setAccount] = useState("connect");
  const [nftInfo, setNftInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [tokenhash, setTokenhash] = useState("");
  const [error, setError] = useState("");

  const fetchNFTs = (adress, chainID) => {
    if (chainID !== 137) {
      setError(
        "You are currently not connected to the polygon network please switch the network in your wallet setings to polygon"
      );
    } else {
      setLoading(true);
      const provider = new Web3.providers.HttpProvider(
        "https://polygon-rpc.com/"
      );
      web3 = new Web3(provider);
      abiDecoder.addABI(amatwinecontract.abi);

      fetch(
        "https://api.covalenthq.com/v1/137/address/" +
          adress +
          "/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=" +
          process.env.NEXT_PUBLIC_COVALENT_KEY
      )
        .then((res) => res.json())
        .then((result) => {
          const newestTransaction =
            result.data.items[result.data.items.length - 1];
          const hash = newestTransaction.tx_hash;

          fetch(
            "https://api.covalenthq.com/v1/137/transaction_v2/" +
              hash +
              "/?quote-currency=USD&format=JSON&no-logs=false&key=" +
              process.env.NEXT_PUBLIC_COVALENT_KEY
          )
            .then((transactionDetails) => transactionDetails.json())
            .then((transactionDetailsJson) => {
              const log_events =
                transactionDetailsJson.data.items[0].log_events;
              const tokenId = web3.utils.hexToNumber(
                log_events[1].raw_log_topics[3]
              );
              fetch(
                "https://api.covalenthq.com/v1/137/tokens/0xc31d5cb4ce44c2c0b2119c28485a5e90f89406fd/nft_transactions/" +
                  tokenId +
                  "/?quote-currency=USD&format=JSON&key=" +
                  process.env.NEXT_PUBLIC_COVALENT_KEY
              )
                .then((nftTransaction) => nftTransaction.json())
                .then((nftTransactionJson) => {
                  const initialTokenHash =
                    nftTransactionJson.data.items[0].nft_transactions[
                      nftTransactionJson.data.items[0].nft_transactions.length -
                        1
                    ].tx_hash;
                  fetch(
                    "https://api.polygonscan.com/api?module=proxy&action=eth_getTransactionByHash&txhash=" +
                      initialTokenHash
                  )
                    .then((polygonResponse) => polygonResponse.json())
                    .then((polygonResponseJson) => {
                      const inputData = polygonResponseJson.result.input;
                      const inputDecodeFull =
                        abiDecoder.decodeMethod(inputData);
                      const ipfsLink =
                        inputDecodeFull.params[
                          inputDecodeFull.params.length - 1
                        ].value;
                      setTokenhash(polygonResponseJson.result.hash);
                      fetch(
                        "https://ipfs.io/ipfs/" +
                          ipfsLink.slice(7, ipfsLink.length)
                      )
                        .then((nftData) => nftData.json())
                        .then((nftDataJson) => {
                          setNftInfo(nftDataJson);
                          setLoading(false);
                        });
                    });
                });
            });
        });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Amatwine NFT Validifier</title>
        <meta
          name="description"
          content="Webapp that lets you login with your wallet and displays the correspoding nft"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar setAccount={setAccount} fetchNFTs={fetchNFTs} />
      <main id={styles.maincontainer}>
        <About />
        <InfoArea
          nftInfo={nftInfo}
          loading={loading}
          tokenhash={tokenhash}
          error={error}
        />
      </main>
      <Footer />
    </div>
  );
}
