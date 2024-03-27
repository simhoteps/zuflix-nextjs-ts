import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import styles from "./styles.module.css";
import { RiSearch2Line } from "react-icons/ri";
import { RiNotification4Line } from "react-icons/ri";
import Image from "next/image";
function Header() {
  return (
    <header className={`${styles.header} appContainer fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          ZUFIX
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="/">MOVIES</Link>
          <Link href="/series">SERIES</Link>
          <Link href="#">KIDS</Link>
        </nav>
        <nav className={"flex items-center gap-1 "}>
          <Link className="w-[36px]" href="#">
            <RiSearch2Line size={20} />
          </Link>
          <Link className="w-[36px]" href="#">
            <RiNotification4Line size={20} />
          </Link>

          <Link className="w-[36px]" href={`/`}>
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
