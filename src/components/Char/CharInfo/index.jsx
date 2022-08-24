import React from 'react';
import PropTypes from 'prop-types';

import styles from './CharInfo.module.scss';

const CharInfo = ({charInfo}) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {
          charInfo.map(({title, data}) => {
            return data && (
              <li className={styles.list__item} key={title}>
                <span className={styles["list__item-title"]} >{title}</span>: {data}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

CharInfo.propTypes = {
  charInfo: PropTypes.array
};

export default CharInfo;