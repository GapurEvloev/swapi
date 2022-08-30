import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './UiGif.module.scss';

const UiGif = ({
  src,
  classes
}) => {

  return (
    <img src={src} className={cn(styles.gif, classes)} alt=""/>
  )
}

UiGif.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
}

export default UiGif;