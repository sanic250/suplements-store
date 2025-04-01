"use client";
import React, { useState } from "react";
import styles from "./styles_components/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isProducersOpen, setIsProducersOpen] = useState(false);

  return (
    <header className={styles.header}>
    <div className={styles.bgtop}>
  
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="/">
            <img className={styles.logo} src="/logo.png" alt="Logo" />
          </a>
        </div>
        <div>
          <h1 className={styles.mainTitle}>Nutrion Shop</h1>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faUser} size="lg" color="black" className={styles.icon} />
          <p className={styles.iconText}>Zaloguj się</p>
          <FontAwesomeIcon icon={faCartPlus} size="lg" color="black" className={styles.icon} />
          <p className={styles.iconText}>Koszyk</p>
        </div>
    </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.links}>
          {/* Kategorie */}
          <li 
            className={styles.menuItem} 
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <span className={styles.link}>Kategorie</span>
            <ul className={`${styles.submenu} ${isCategoryOpen ? styles.submenuOpen : ""}`}>
              <li><a href="#">Odżywki i Suplementy</a></li>
              <li><a href="#">Zdrowie i Kondycja</a></li>
              <li><a href="#">Żywność Dietetyczna</a></li>
              <li><a href="#">Odzież i Akcesoria</a></li>
            </ul>
          </li>

          {/* Producenci */}
          <li 
            className={styles.menuItem} 
            onMouseEnter={() => setIsProducersOpen(true)}
            onMouseLeave={() => setIsProducersOpen(false)}
          >
            <span className={styles.link}>Producenci</span>
            <ul className={`${styles.submenu} ${isProducersOpen ? styles.submenuOpen : ""}`}>
              <li><a href="#">SFD</a></li>
              <li><a href="#">KFD</a></li>
              <li><a href="#">Olimp</a></li>
              <li><a href="#">MuscleTech</a></li>
              <li><a href="#">Gatorade</a></li>
              <li><a href="#">ActivLab</a></li>
              <li><a href="#">OstroVit</a></li>
              <li><a href="#">MuscleTech</a></li>
              <li><a href="#">MusclePharm</a></li>
              <li><a href="#">NutraBolt</a></li>
            </ul>
          </li>

         
          <li><a className={styles.link} href="#">Dostawa</a></li>
          <li><a className={styles.link} href="#">O nas</a></li>
          <li><a className={styles.link} href="#">Pomoc</a></li>
          <li><a className={styles.link} href="#">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
