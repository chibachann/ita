import * as React from 'react';
import * as styles from './header.module.css';

const navigationItems = [
  { id: 'top', label: 'Top'},
  { id: 'food', label: 'Food' },
  { id: 'drink', label: 'Drink' },
  { id: 'floor', label: 'Floor' },
  { id: 'shopinfo', label: 'ShopInfo' },
];

const Header = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoText}>Trattoria Della Luna</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <button onClick={() => handleClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
