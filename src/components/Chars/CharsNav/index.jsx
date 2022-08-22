import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import styles from './CharsNav.module.scss';

const CharsNav = ({
  getResource,
  prevPage,
  nextPage,
  counterPage
}) => {
  const handlePrev = () => getResource(prevPage)
  const handleNext = () => getResource(nextPage)

  return (
    <div className={styles.container}>
      <Link
        to={`/chars/?page=${counterPage - 1}`}
        className={styles.buttons}
      >
        <button
          onClick={handlePrev}
          disabled={!prevPage}
        >
          Prev
        </button>
      </Link>
      <Link
        to={`/chars/?page=${counterPage + 1}`}
        className={styles.buttons}
      >
        <button
          onClick={handleNext}
          disabled={!nextPage}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

CharsNav.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
}
export default CharsNav;