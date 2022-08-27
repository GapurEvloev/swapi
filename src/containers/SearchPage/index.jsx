import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPage.module.scss';
import {getApiResource} from "../../utils/network";
import {API_SEARCH} from "../../constants/api";
import {getCharsId, getCharsImg} from "../../services/getCharsData";
import {debounce} from "lodash";
import SearchPageInfo from "../../components/SearchPageInfo";
import UiInput from "../../components/Ui/UiInput";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";

const SearchPage = ({setErrorApi}) => {
  const [inputSearchValue, setInputSearchValue] = React.useState('');
  const [chars, setChars] = React.useState([]);

  const getResponse = async param => {
    const res = await getApiResource(API_SEARCH+param);

    if (res) {
      const charsList = res.results.map(({ name, url }) => {
        const id = getCharsId(url);
        const img = getCharsImg(id);

        return {
          id,
          name,
          img,
        }
      });

      setChars(charsList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }

  React.useEffect(() => {
    getResponse('');
  }, []);

  const debouncedGetResponse = React.useCallback(
    debounce(value => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>
      <UiInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input character's name"
        classes={styles.input__search}
      />

      <SearchPageInfo chars={chars}/>
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func

}

export default withErrorApi(SearchPage);