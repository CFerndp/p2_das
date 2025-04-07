"use client";

import Button from "@/components/Button/Button";
import { getAuctionById } from "./utils";
import styles from "./styles.module.css";
import Link from "next/link";

const Details = ({ params }) => {
  const { id } = params;
  const auction = getAuctionById(id);

  return (
    <>
      <h2>{auction.name}</h2>
      <p>
        <b>Precio:</b> {auction.price}€
      </p>
      <p>
        <b>Estado:</b> {auction.open ? "Abierta" : "Cerrada"}
      </p>

      {auction.open && (
        <div className={styles.participate}>
          <label htmlFor="quantity">
            <b>Cantidad:</b>
          </label>
          <input type="number" placeholder="Cantidad" id="quantity" />
          <Button label="Participar" />
        </div>
      )}
      {!auction.open && <p>La subasta ha terminado</p>}

      <Link href="/auctions">
        <Button label="Volver" />
      </Link>
    </>
  );
};

export default Details;
