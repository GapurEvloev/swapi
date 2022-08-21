import React from 'react';
import styles from './Chars.module.scss';
import {getApiResource} from "../../utils/network";
import {API_CHARS} from "../../constants/api";
import {getCharsId, getCharsImg} from "../../services/getCharsData";
import CharsList from "../../components/Chars/CharsList";

const Chars = () => {
  const [chars, setChars] = React.useState([]);

  const getResource = async (url) => {
    const res = await getApiResource(url);
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
  };

  React.useEffect(() => {
    getResource(API_CHARS);
  }, []);

  return (
    <div styles={styles.chars}>
      <>
        {chars && <CharsList chars={chars}/>}
      </>
    </div>
  );
};

export default Chars;