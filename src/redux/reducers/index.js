import { combineReducers } from "@reduxjs/toolkit";
import loaderReducer from "./loaderReducer";
import languageReducer from "./lenguageReducer";

const rootReducer = combineReducers({
  loader: loaderReducer,
  language: languageReducer,
});

export default rootReducer;
