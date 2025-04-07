import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Hecha en DAS para el curso {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
