"use client";
import Card from "@/components/Card/Card";
import styles from "./styles.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { isUserAuth } from "@/utils/isUserAuth";

const AuctionCard = ({ name, price, open, id }) => {
  const isAuth = isUserAuth();
  return (
    <Card className={styles.card}>
      <h3>{name}</h3>
      <p>{price}€</p>
      <p>{open ? "Abierta" : "Cerrada"}</p>
      {open && isAuth && (
        <Link href={`/auctions/${id}`}>
          <Button label="Participar" />
        </Link>
      )}
    </Card>
  );
};

export default AuctionCard;
