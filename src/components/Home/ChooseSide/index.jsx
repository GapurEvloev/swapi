import React from 'react';
import PropTypes from 'prop-types';
import {useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL} from "../../../context/ThemeProvider";

import styles from './ChooseSide.module.scss';

const ChooseSide = props => {
  const isTheme = useTheme();

  return (
    <div>
      <p style={{color: "#fff"}}>{isTheme.theme}</p>
      <button onClick={() => isTheme.change(THEME_LIGHT)}>LIGHT</button>
      <button onClick={() => isTheme.change(THEME_DARK)}>DARK</button>
      <button onClick={() => isTheme.change(THEME_NEUTRAL)}>NEUTRAL</button>
    </div>
  );
};

ChooseSide.propTypes = {
//
};

export default ChooseSide;