import React from 'react';
import styles from './ColourCard.module.css';

const ColourCard = ({ colourName, hexCode }) => {
  return (
    <div className={styles.colourCard}>
      <div className={styles.colourPreview} style={{ backgroundColor: hexCode }}></div>

      <div className={styles.colourDetails}>
        <h3 className={styles.colourName}>{colourName}</h3>
        <p className={styles.hexCode}>{hexCode}</p>
      </div>
    </div>
  );
};

export default ColourCard;
