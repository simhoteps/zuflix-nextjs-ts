import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          {/*  <FaPlayCircle /> */} ZUFIX
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="#">MOVIES</Link>
          <Link href="#">SERIES</Link>
          <Link href="#">KIDS</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
