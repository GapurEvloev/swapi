import React from 'react';
import PropTypes from 'prop-types';

import styles from './CharPhoto.module.scss';

const CharPhoto = ({charPhoto, charName}) => {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={charPhoto} alt={charName}/>
    </div>
  );
};

CharPhoto.propTypes = {
  charPhoto: PropTypes.string,
  charName: PropTypes.string
};

export default CharPhoto;