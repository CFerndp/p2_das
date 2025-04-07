import { auctions } from "@/constants/auctions";

export const getAuctionById = (id) => {
  if (id > auctions.length - 1 || id < 0) {
    return null;
  }

  const auction = auctions[id];

  return auction;
};
