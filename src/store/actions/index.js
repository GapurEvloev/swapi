import { ADD_CHAR_TO_FAVOURITE } from "../constants/actionTypes";
import { REMOVE_CHAR_TO_FAVOURITE } from "../constants/actionTypes";

export const setCharToFavourite = (char) => ({
  type: ADD_CHAR_TO_FAVOURITE,
  payload: char,
});

export const removeCharToFavourite = (charId) => ({
  type: REMOVE_CHAR_TO_FAVOURITE,
  payload: charId,
});