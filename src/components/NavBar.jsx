import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive}) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return(
    <nav className={styles.nav}>
      <span className={styles.brand}>SafeHands</span>

      <button 
      className={styles.hamburger}
      onClick={() => setOpen(!open)}
      aria-label='Toggle menu'
      aria-expanded={open}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>

        
      </button>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        <li>
          <NavLink to='/' end className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          </li>
        <li>
          <NavLink to='/about' className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
          </li>
        <li>
          <NavLink to='/quote' className={linkClass} onClick={() => setOpen(false)}>Quote</NavLink>
        </li>
      </ul>
    </nav>    
  );
}

export default NavBar;