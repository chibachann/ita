import * as React from 'react';
import * as styles from './RestaurantIntroduction.module.css';

const RestaurantIntroduction = () => {
  return (
    <section id="concept" className={styles.section}>
      <div className={styles.imageContainer}>
        <img src="/images/entrance.jpg" alt="料理1" className={`${styles.image}`} />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Trattoria Della Luna</h1>
          <p className={styles.subtitle}>～素敵な夜に最高の食事を～</p>
        </div>
      </div>
    </section>
  );
};

export default RestaurantIntroduction;
