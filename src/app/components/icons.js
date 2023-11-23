import React from "react";
import styles from "./styles/icon.module.css";

export default function Icons({ Icon, font }) {
  return (
    <div>
      <Icon className={styles.icon} style={{ fontSize: `${font}px` }} />
    </div>
  );
}
