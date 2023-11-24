import React from "react";
import styles from "./styles/ourwork.module.css";
import ContentCard from "./contentCard";

export default function OurWork() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.work}>
        <div className={styles.heading}>
          <h1>Our </h1>
          <h1> work </h1>
        </div>
        <ContentCard
          title="SHARARA Video App"
          subtitle="TECHJET"
          dir="row-reverse"
        />
        <ContentCard title="SHARARA Video App" subtitle="TECHJET" dir="row" />
        <ContentCard
          title="SHARARA Video App"
          subtitle="TECHJET"
          dir="row-reverse"
        />
        <ContentCard title="SHARARA Video App" subtitle="TECHJET" dir="row" />
      </div>
    </div>
  );
}
