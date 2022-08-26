import {applyMiddleware, legacy_createStore as createStore} from "redux";
import rootReducer from "./reducers";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {setLocalStorage} from "../utils/localstorage";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  // store.getState().favouriteReducer
  console.log(store.getState().favouriteReducer)
  setLocalStorage("swStore", store.getState().favouriteReducer)
})

export default store;