"use client";

import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  const token = localStorage.getItem("token-jwt");
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("token-jwt");
    localStorage.removeItem("userName");
  };

  return (
    <nav className={styles.header}>
      <Link href="/auctions" className={styles.linkStyle}>
        <h1>DAS Auctions</h1>{" "}
      </Link>

      <div className={styles.actionContainer}>
        {token ? (
          <>
            <Link href="/me" className={styles.linkStyle}>
              <p>{userName}</p>
            </Link>
            <Link
              href="/auctions"
              className={styles.linkStyle}
              onClick={handleLogout}
            >
              <p>Log out</p>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login" className={styles.linkStyle}>
              <p>Login</p>
            </Link>
            <Link href="/register" className={styles.linkStyle}>
              <p>Registro</p>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
