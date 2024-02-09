import React from "react";
import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import Navlink from "./nav-link";

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
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>

            <li>
              <Navlink href="/community">Foodie Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
