import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { CiMenuBurger } from "react-icons/ci";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <span className={styles.navbarLogo}>Portfolio</span>
        <button className={styles.navbarToggle} onClick={toggleNavbar}>
          <CiMenuBurger />
        </button>
      </div>
      <ul className={`${styles.navbarLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <AnchorLink href="#Profile">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#About">About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#Services">Services</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#Project">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#Contact">Contact</AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
