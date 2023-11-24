"use client";
import React from "react";
import styles from "./styles/navbar.module.css";
import Icons from "./icons";
import { useState, useCallback, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaInstagram, FaLinkedin, FaPagelines, FaRocket } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  // let prevScrollPos = global.window.scrollY;

  // function stickNavbar() {
  //   let windowHeight = window.scrollY;
  //   if (prevScrollPos > windowHeight) {
  //     document.querySelector("#head").style.top = "0";
  //   } else {
  //     document.querySelector("#head").style.top = "-80px";
  //   }
  //   prevScrollPos = windowHeight;
  // }
  function myscroll() {
    document.getElementById("foot").scrollIntoView();
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", stickNavbar);
  // }, []);
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <div id="head" className={styles.outer_div}>
        <div className={styles.title}>
          <Icons Icon={FaRocket} font={40} />
          <h1>JetSpeed</h1>
        </div>
        <ul className={isShowing ? styles.list : styles.list1}>
          <li
            onClick={() => {
              setIsShowing(!isShowing);
              myscroll();
            }}
          >
            <Link href="">Home</Link>
          </li>
          <li
            onClick={() => {
              setIsShowing(!isShowing);
            }}
          >
            <Link href="">Our work</Link>
          </li>
          <li
            onClick={() => {
              setIsShowing(!isShowing);
            }}
          >
            <Link href="">Our services</Link>
          </li>
          <li
            onClick={() => {
              setIsShowing(!isShowing);
            }}
          >
            <Link href="">About us</Link>
          </li>
        </ul>
        <ul className={styles.logo_list}>
          <li>
            <Link href="">
              <Icons Icon={FaInstagram} font={28} />
            </Link>
          </li>
          <li>
            <Link href="">
              <Icons Icon={FaLinkedin} font={28} />
            </Link>
          </li>
        </ul>
        <div
          className={styles.logo_div}
          onClick={() => {
            setIsShowing(!isShowing);
          }}
        >
          <Icons Icon={TiThMenu} font={26} />
        </div>
      </div>
    </div>
  );
}
