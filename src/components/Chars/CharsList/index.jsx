import React from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";
import styles from './CharsList.module.scss';

const CharsList = ({chars}) => {
  return (
    <ul className={styles.chars}>
      {chars.map(({id, name, img}) => (
        <li className={styles.char} key={id}>
          <Link to={`/chars/${id}`}>
            <img className={styles.char__img} src={img} alt={name}/>
            <span className={styles.char__name}>
              {name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

CharsList.propTypes = {
  chars: PropTypes.array,
}

export default CharsList;