import { LOADER_ACTIVE, LOADER_STOP, CLEAR_ERRORS } from "./index";


export const loaderActive = (value) => {
  return (dispatch) => {
    console.log(value);
    dispatch({ type: LOADER_ACTIVE, payload: value });
  };
};

export const loaderStop = (value) => {
  return (dispatch) => {
    dispatch({ type: LOADER_STOP, payload: value });
  }
};

