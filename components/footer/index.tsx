import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link style={{ textDecoration: "none" }} href="" target="_blank">
        Zühal H. Yurdakul
      </Link>
    </footer>
  );
}

export { Footer };
