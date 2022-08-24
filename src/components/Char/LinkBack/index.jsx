import React from 'react';
import {useNavigate} from "react-router";

import styles from './LinkBack.module.scss';

import back from "./img/back.svg"

const LinkBack = () => {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div>
      <button
        className={styles.back}
        onClick={handleBack}
      >
        <img className={styles.back__img} src={back} alt=""/>
        <span>Go back</span>
      </button>
    </div>
  );
};

export default LinkBack;