import React from 'react';
import UiVideo from "../Ui/UiVideo";

import video from "./video/han-solo.mp4"
import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won.<br/>
        We cannot display data.<br/>
        Come back when we fix everything
      </p>
      <UiVideo src={video} classes={styles.video} playbackRate={1.0}/>
    </>
  );
};

export default ErrorMessage;