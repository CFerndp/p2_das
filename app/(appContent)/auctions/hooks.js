"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { getAuctions } from "./utils";

export const useSearchAuctions = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [auctions, setAuctions] = useState([]);

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
    auction.title.toLowerCase().includes(search.toLowerCase())
  );

  const setSearch = (newSearch) => {
    const queryString = createQueryString("search", newSearch);
    router.push(`?${queryString}`);
  };

  useEffect(() => {
    const doAsyncTask = async () => {
      const auctions = await getAuctions();
      setAuctions(auctions);
    };

    doAsyncTask();
  }, []);

  return {
    auctions: filteredAuctions,
    setSearch,
    value: search,
  };
};
