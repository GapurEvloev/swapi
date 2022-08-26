import React, {useEffect, useState} from 'react';
import styles from './FavouritesPage.module.scss';
import {useSelector} from "react-redux";
import CharsList from "../../components/Chars/CharsList";

const FavouritesPage = () => {
  const [chars, setChars] = useState([]);
  const storeData = useSelector(state => state.favouriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map(item => {
        return {
          id: item[0],
          ...item[1]
        }
      });

      setChars(res);
    }
  }, []);

  return (
    <>
      <h1 className="header__text">Favourites</h1>
      {
        chars.length ?
          <CharsList chars={chars}/> :
          <div className={styles.comment}>No data</div>
      }
    </>
  );
};

export default FavouritesPage;