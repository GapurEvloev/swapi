import React from "react";

import styles from "./NotFound.module.scss";

import image from "./img/not-found.png";
import {useLocation} from "react-router";

const NotFound = () => {
  const location = useLocation();

  return (
    <div>
        <img className={styles.img} src={image} alt="Not found"/>
        <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </div>
  );
};

export default NotFound;