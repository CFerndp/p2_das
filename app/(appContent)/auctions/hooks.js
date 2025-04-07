"use client";
import { useState } from "react";
import { auctions } from "./constants";

export const useSearchAuctions = () => {
  const [search, setSearch] = useState("");

  return {
    auctions: auctions.filter((auction) =>
      auction.name.toLowerCase().includes(search.toLowerCase())
    ),
    setSearch,
  };
};
