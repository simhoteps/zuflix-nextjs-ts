import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { RiSearch2Line } from "react-icons/ri";
import { RiNotification4Line } from "react-icons/ri";
import Image from "next/image";

function Header() {
  return (
    <header className={`${styles.header} appContainer fluid`}>
      <div className={styles.headerWrapper}>
        <Link rel="preload" className={styles.logo} href="/" as={`/`}>
          ZUFIX
        </Link>
        <nav className={styles.navigationMenu}>
          <Link rel="preload" href="/" as={`/`}>
            MOVIES
          </Link>
          <Link rel="preload" href="/series" as="/series">
            SERIES
          </Link>
          {/*        <Link rel="preload" href="#" as="#">
            KIDS
          </Link> */}
        </nav>
        <nav className={"flex items-center gap-1 "}>
          <Link rel="preload" className="w-[36px]" href="#" as="#">
            <RiSearch2Line size={20} />
          </Link>
          <Link rel="preload" className="w-[36px]" href="#" as="#">
            <RiNotification4Line size={20} />
          </Link>

          <Link rel="preload" className="w-[36px]" href={`/`} as={`/`}>
            <Image
              className="rounded-full"
              width={36}
              height={36}
              unoptimized
              alt={"profile"}
              src={`./profile.jpeg`}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
