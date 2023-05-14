import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.divAbout}>
      <div className={styles.divImaAbout}></div>
      <div className={styles.divTextoAbout}>
        <h3>Joselin Benitez</h3>
        <p>Desarrolladora Web Full Stack</p>
      </div>
    </div>
  );
}
