"use client";

import { useSearchAuctions } from "./hooks";
import AuctionCard from "./(partials)/(AuctionCard)/AuctionCard";
import styles from "./page.module.css";
import SearchBar from "./(partials)/(SearchBar)/SearchBar";

const Auctions = () => {
  const { auctions, setSearch } = useSearchAuctions();
  console.log({ auctions });

  return (
    <>
      <h2>Subastas disponibles</h2>
      <SearchBar onSearch={setSearch} />

      <div className={styles.auctions}>
        {auctions.map((auction, i) => (
          <AuctionCard
            key={`auction-${i}-${auction.name}`}
            name={auction.name}
            price={auction.price}
            open={auction.open}
          />
        ))}
        {auctions.length === 0 && <p>No hay subastas disponibles</p>}
      </div>
    </>
  );
};

export default Auctions;
