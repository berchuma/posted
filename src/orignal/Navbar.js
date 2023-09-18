import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);





  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")/*this will import the image frome the asset(x)*/
              : getImageUrl("nav/menuIcon.png")/*this will import the image frome the asset(hamberger)*/
            }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false) }
        >
          <li>
            <a href="#about">About</a>
          </li>
        
          <li>
            <a href="#expri">Branch</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;