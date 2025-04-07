"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { auctions } from "@/constants/auctions";
import { useCallback } from "react";

export const useSearchAuctions = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const search = searchParams.get("search") || "";

  const filteredAuctions = auctions.filter((auction) =>
    auction.name.toLowerCase().includes(search.toLowerCase())
  );

  const setSearch = (newSearch) => {
    const queryString = createQueryString("search", newSearch);
    router.push(`?${queryString}`);
  };

  return {
    auctions: filteredAuctions,
    setSearch,
    value: search,
  };
};
