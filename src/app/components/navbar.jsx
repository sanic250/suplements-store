import React from "react";
import styles from "./styles_components/navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navLinks = [
    { label: "Kategorie", href: "/kategorie" },
    { label: "Producenci", href: "/producenci" },
    { label: "Dostawa", href: "/dostawa" },
    { label: "O nas", href: "/o-nas" },
    { label: "Pomoc", href: "/pomoc" },
    { label: "Kontakt", href: "/kontakt" },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <img className={styles.logo} src="/logo.png" />
          </Link>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            color="black"
            className={styles.icon}
          />
          <p className={styles.iconText}>Zalogój się</p>
          <FontAwesomeIcon
            icon={faCartPlus}
            size="lg"
            color="black"
            className={styles.icon}
          />
          <p className={styles.iconText}>Koszyk</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={styles.link} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
