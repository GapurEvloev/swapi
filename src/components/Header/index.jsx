import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import Favorites from "../Favorites";
import {THEME_DARK, THEME_LIGHT, THEME_NEUTRAL, useTheme} from "../../context/ThemeProvider";

import imgDroid from './img/droid.svg';
import imgLightSaber from './img/lightsaber.svg';
import imgSpaceStation from './img/space-station.svg';

import styles from './Header.module.scss';

const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStation);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightSaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEUTRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgSpaceStation);
    }
  })

  return (
    <header className={styles.container}>
      <NavLink to="/"><img className={styles.logo} src={icon} alt="Star Wars" /></NavLink>

      <ul className={styles.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/chars?page=1">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
        <li>
          <NavLink to="/404">Not found</NavLink>
        </li>
      </ul>
      <Favorites />
    </header>
  )
}

export default Header;