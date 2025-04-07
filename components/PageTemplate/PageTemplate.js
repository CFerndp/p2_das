"use client";
import React from "react";
import styles from "./styles.module.css";
import Footer from "./partials/Footer/Footer";
import Header from "./partials/Header/Header";

const PageTemplate = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.section}>{children}</section>
      <Footer />
    </div>
  );
};

export default PageTemplate;
