import React from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import CharsList from "../../components/Chars/CharsList";
import { changeHttp, getApiResource } from "../../utils/network";
import { useQueryParams } from "../../hooks/useQueryParams";
import { getCharsId, getCharsImg, getPeoplePageId } from "../../services/getCharsData";
import { API_CHARS } from "../../constants/api";
import CharsNav from "../../components/Chars/CharsNav";

// import styles from './Chars.module.scss';

const Chars = ({ setErrorApi }) => {
  const [chars, setChars] = React.useState([]);
  const [prevPage, setPrevPage] = React.useState(null)
  const [nextPage, setNextPage] = React.useState(null)
  const [counterPage, setCounterPage] = React.useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  console.log(prevPage, nextPage, queryPage)

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
      setPrevPage(changeHttp(res.previous));
      setNextPage(changeHttp(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    }
    else {
      setErrorApi(true);
    }
  };

  React.useEffect(() => {
    getResource(API_CHARS + (queryPage || counterPage));
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <CharsNav
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {chars && <CharsList chars={chars}/>}
    </>
  );
};

Chars.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(Chars);