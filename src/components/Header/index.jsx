import * as React from "react";
import { NavLink } from "react-router-dom";

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/chars?page=1">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/404">Not found</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header;