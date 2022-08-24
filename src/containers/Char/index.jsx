import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router";

import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import {getApiResource} from "../../utils/network";
import {API_CHAR} from "../../constants/api";

import styles from "./Char.module.scss"
import {getCharsImg} from "../../services/getCharsData";
import CharPhoto from "../../components/Char/CharPhoto";
import CharInfo from "../../components/Char/CharInfo";

const Char = ({ setErrorApi }) => {
  const { charId } = useParams();
  const [charInfo, setCharInfo] = useState(null);
  const [charName, setCharName] = useState(null);
  const [charPhoto, setCharPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_CHAR}/${charId}`);

      if (res) {
        setCharInfo([
          {title: "Height", data: res.height},
          {title: "Weight", data: res.mass},
          {title: "hair_color", data: res.hair_color},
          {title: "skin_color", data: res.skin_color},
          {title: "eye_color", data: res.eye_color},
          {title: "birth_year", data: res.birth_year},
          {title: "gender", data: res.gender},
        ]);
        setCharName(res.name);
        setCharPhoto(getCharsImg(charId));

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })()
  }, []);

  return (
    <>
      <div className={styles.char}>
        <h1 className={styles.char__name}>{charName}</h1>
        <div className={styles.char__info}>
          <CharPhoto charPhoto={charPhoto} charName={charName} />
          {charInfo && <CharInfo charInfo={charInfo} />}
        </div>
      </div>
    </>
  );
};

Char.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(Char);