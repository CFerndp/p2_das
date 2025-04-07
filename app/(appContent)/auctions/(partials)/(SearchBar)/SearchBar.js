"use client";

import Button from "@/components/Button/Button";
import React, { useState } from "react";
import styles from "./styles.module.css";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search.trim());
  };

  const handleClear = () => {
    setSearch("");
    onSearch("");
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <Button onClick={handleSearch} label="Buscar" />
      <Button onClick={handleClear} label="Limpiar" />
    </div>
  );
};

export default SearchBar;
