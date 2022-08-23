import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import "../index.scss"
import styles from './UiButton.module.scss';

const UiButton = ({
  children,
  onClick,
  disabled,
  theme="dark",
  classes,
}) => {
  return (
    <button
      className={cn(styles.button, styles[theme], classes)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

UiButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  theme: PropTypes.string,
  classes: PropTypes.string,
}

export default UiButton;