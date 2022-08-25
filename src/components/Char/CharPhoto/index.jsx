import React from 'react';
import PropTypes from 'prop-types';

import styles from './CharPhoto.module.scss';
import {useDispatch} from "react-redux";
import {setCharToFavourite, removeCharToFavourite} from "../../../store/actions";

const CharPhoto = ({
                     charId,
                     charPhoto,
                     charName,
                     charFavourite,
                     setCharFavourite,
}) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(setCharToFavourite({
      [charId]: {
        name: charName,
        img: charPhoto
      }
    }))
  }
  const remove = () => {
    dispatch(removeCharToFavourite(charId));
  }
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={charPhoto} alt={charName}/>
      </div>
      <button onClick={add}>Add</button>
      <button onClick={remove}>remove</button>
    </>
  );
};

CharPhoto.propTypes = {
  charId: PropTypes.string,
  charPhoto: PropTypes.string,
  charName: PropTypes.string,
  charFavourite: PropTypes.bool,
  setCharFavourite: PropTypes.func,
};

export default CharPhoto;