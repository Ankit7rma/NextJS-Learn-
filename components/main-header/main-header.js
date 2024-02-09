import React from "react";
import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={LogoImg.src}
            alt="Logo Image"
            priority
            width={500}
            height={500}
          />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals </Link>
            </li>

            <li>
              <Link href="/community ">Foodie Community </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
