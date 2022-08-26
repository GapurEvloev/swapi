import {ADD_CHAR_TO_FAVOURITE, REMOVE_CHAR_TO_FAVOURITE} from "../constants/actionTypes";
import omit from "lodash/omit";
import {getLocalStorage} from "../../utils/localstorage";

const initState = getLocalStorage("swStore");

const favouriteReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CHAR_TO_FAVOURITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_CHAR_TO_FAVOURITE:
      return omit(state, [action.payload]);
    default: return state;
  }
};

export default favouriteReducer;