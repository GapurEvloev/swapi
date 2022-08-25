import React from 'react';
import styles from './FavouritesPage.module.scss';
import {useSelector} from "react-redux";

const FavouritesPage = () => {
  const storeData = useSelector(state => state.favouriteReducer);

  return (
    <div className={styles.comment}>
      {/*{storeData}*/}
    </div>
  );
};

export default FavouritesPage;