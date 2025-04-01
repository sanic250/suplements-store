import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from './styles_components/itembox.module.css';

const Itembox = ({ name, price, image }) => {
  return (
    <div className={styles.itemBoxContainer}>
      <div className={styles.itemBox}>
        <img src={image} className={styles.itemImg} alt={name} />
        <p className={styles.itemName}>{name}</p>
      </div>
      <p className={styles.price}>{price} zł</p>
      <a href='#' className={styles.quickView}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="black" /> Szybki podgląd
      </a>
    </div>
  );
};

export default Itembox;