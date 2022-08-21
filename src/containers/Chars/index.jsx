import React from 'react';
import PropTypes from 'prop-types';

import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import CharsList from "../../components/Chars/CharsList";
import {getApiResource} from "../../utils/network";
import {getCharsId, getCharsImg} from "../../services/getCharsData";
import {API_CHARS} from "../../constants/api";

import styles from './Chars.module.scss';

const Chars = ({ setErrorApi }) => {
  const [chars, setChars] = React.useState([]);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {
      const charsList = res.results.map(({ name, url })=> {
        const id = getCharsId(url);
        const img = getCharsImg(id);
        return (
          {
            id,
            name,
            url,
            img,
          }
        )
      });

      setChars(charsList);
      setErrorApi(false);
    }
    else {
      setErrorApi(true);
    }
  };

  React.useEffect(() => {
    getResource(API_CHARS);
  }, []);

  return (
    <div className={styles.chars}>
      <>
        {chars && <CharsList chars={chars}/>}
      </>
    </div>
  );
};

Chars.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(Chars);