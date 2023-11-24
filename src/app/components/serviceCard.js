import Image from "next/image";
import React from "react";
import styles from "./styles/serviceCard.module.css";
import img1 from "../images/img1.jpg";

export default function ServiceCard({ Icon, title }) {
  return (
    <div className={styles.outer_div}>
      <div>
        <Icon className={styles.pic} />
      </div>
      <div className={styles.heading}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
