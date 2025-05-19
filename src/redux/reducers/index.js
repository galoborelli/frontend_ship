import { combineReducers } from "@reduxjs/toolkit";
import loaderReducer from "./loaderReducer";
import languageReducer from "./lenguageReducer";
import  bannerReducer   from "./bannerReducer";
import  bookingReducer   from "./reserveReducer";


const rootReducer = combineReducers({
  loader: loaderReducer,
  language: languageReducer,
  images: bannerReducer,
  booking: bookingReducer,
});

export default rootReducer;
