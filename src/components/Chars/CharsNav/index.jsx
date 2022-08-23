import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import styles from './CharsNav.module.scss';
import UiButton from "../../Ui/UiButton";

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
        <UiButton
          onClick={handlePrev}
          disabled={!prevPage}
        >
          Prev
        </UiButton>
      </Link>
      <Link
        to={`/chars/?page=${counterPage + 1}`}
        className={styles.buttons}
      >
        <UiButton
          onClick={handleNext}
          disabled={!nextPage}
        >
          Next
        </UiButton>
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