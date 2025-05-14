import { combineReducers } from "@reduxjs/toolkit";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
  loader: loaderReducer,
});

export default rootReducer;
