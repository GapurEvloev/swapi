import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router";
import {useSelector} from "react-redux";

import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import {getApiResource} from "../../utils/network";
import {API_CHAR} from "../../constants/api";

import {getCharsImg} from "../../services/getCharsData";
import CharPhoto from "../../components/Char/CharPhoto";
import CharInfo from "../../components/Char/CharInfo";
import LinkBack from "../../components/Char/LinkBack";
import UiLoading from "../../components/Ui/UiLoading";

import styles from "./Char.module.scss";

const CharFilms = React.lazy(() => import("../../components/Char/CharFilms"));

const Char = ({ setErrorApi }) => {
  const { charId } = useParams();
  const [charInfo, setCharInfo] = useState(null);
  const [charName, setCharName] = useState(null);
  const [charPhoto, setCharPhoto] = useState(null);
  const [charFilms, setCharFilms] = useState(null);
  const [charFavourite, setCharFavourite] = useState(false);

  const storeData = useSelector(state => state.favouriteReducer);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_CHAR}/${charId}`);

      storeData[charId] ? setCharFavourite(true) : setCharFavourite(false);

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
        res.films.length && setCharFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })()
  }, []);

  return (
    <>
      <LinkBack/>
      <div className={styles.char}>
        <h1 className={styles.char__name}>{charName}</h1>
        <div className={styles.char__info}>
          <CharPhoto
            charId={charId}
            charPhoto={charPhoto}
            charName={charName}
            charFavourite={charFavourite}
            setCharFavourite={setCharFavourite}
          />
          {charInfo && <CharInfo charInfo={charInfo} />}
          {charFilms && (
            <React.Suspense fallback={<UiLoading/>}>
              <CharFilms charFilms={charFilms}/>
            </React.Suspense>
          )}
        </div>
      </div>
    </>
  );
};

Char.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(Char);