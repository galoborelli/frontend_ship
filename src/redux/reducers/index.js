import { combineReducers } from "@reduxjs/toolkit";
import loaderReducer from "./loaderReducer";
import languageReducer from "./lenguageReducer";
import  bannerReducer   from "./bannerReducer";



const rootReducer = combineReducers({
  loader: loaderReducer,
  language: languageReducer,
  images: bannerReducer,
});

export default rootReducer;
