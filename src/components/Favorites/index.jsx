import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import icon from "./img/bookmark.svg"
import styles from './Favorites.module.scss';

const Favorites = () => {
  const [count, setCount] = useState(0);
  const storeData = useSelector(state => state.favouriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    setCount(length)
  });

  return (
    <div className={styles.container}>
      <span className={styles.counter}>{count}</span>
      <Link to="/favourites"><img className={styles.icon} src={icon} alt="Favorites"/></Link>
    </div>
  );
};

export default Favorites;