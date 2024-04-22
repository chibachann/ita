import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './header.module.css'

const navigationItems = [
  { path: '/a-la-carte', label: 'Drink' },
  { path: '/course-meals', label: 'Course' },
  { path: '/interior', label: 'Floor' },
  { path: '/restaurant-info', label: 'ShopInfo' },
  { path: '/map', label: 'Map' },
]

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoText}>Trattoria Della Luna</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} activeClassName={styles.activeLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
