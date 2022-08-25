import React from 'react';
import {changeHttp, makeConcurrentRequest} from "../../../utils/network";
import styles from './CharFilms.module.scss';

const CharFilms = ({charFilms}) => {
  const [films, setFilms] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const filmsHttps = charFilms.map(url => changeHttp(url));
      const response = await makeConcurrentRequest(filmsHttps);

      setFilms(response);
    })();
  }, []);

  return (
    <ul>
      {
        films && films
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({title, episode_id}) => {
            return (
              <li className={styles.list__item} key={episode_id}>
                <span className={styles.item__episide}>Episode {episode_id}</span>
                <span className={styles.item__colon}> : </span>
                <span className={styles.item__title}>{title}</span>
              </li>
            )
          })
      }
    </ul>
  );
};

export default CharFilms;