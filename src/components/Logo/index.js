import React from "react";
import styles from "./styles.module.css";
import logoPNG from "./images/Logo 298x298.png";

export default () => (
  <a to="/">
    <img className={styles.Logo} src={logoPNG} alt="Logo" />
  </a>
);
