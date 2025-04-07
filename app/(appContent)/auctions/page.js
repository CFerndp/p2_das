import { auctions } from "./constants";
import AuctionCard from "./(partials)/(AuctionCard)/AuctionCard";
import styles from "./page.module.css";

const Auctions = () => {
  return (
    <>
      <h2>Subastas disponibles</h2>
      <div className={styles.auctions}>
        {auctions.map((auction) => (
          <AuctionCard
            key={auction.name}
            name={auction.name}
            price={auction.price}
            open={auction.open}
          />
        ))}
      </div>
    </>
  );
};

export default Auctions;
