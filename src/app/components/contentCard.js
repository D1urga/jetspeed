import React from "react";
import Image from "next/image";
import styles from "./styles/contentCard.module.css";
import img_2 from "../images/img1.jpg";

export default function ContentCard({ title, subtitle, dir }) {
  return (
    <div className={styles.outer_div} style={{ flexDirection: `${dir}` }}>
      <div className={styles.div2}>
        <Image src={img_2} className={styles.pic} />
      </div>
      <div className={styles.div1}>
        <div className={styles.heading}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className={styles.lower}>
          <div>
            <h3 className={styles.hh3}>18M+</h3>
            <h4>Download</h4>
          </div>
          <div className={styles.divider}></div>
          <div>
            <h3 className={styles.hh3}>4⭐</h3>
            <h4>Rating</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
