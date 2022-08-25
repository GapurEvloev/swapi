import {combineReducers} from "redux";
import favouriteReducer from "./favouriteReducer";

const rootReducer = combineReducers({
  favouriteReducer,
});

export default rootReducer;