import { LOADER_ACTIVE, LOADER_STOP, CLEAR_ERRORS } from "./index";


export const loaderActive = (id) => {
  return (dispatch) => {
    console.log(id);
    dispatch({ type: LOADER_ACTIVE, payload: id });
  };
};

export const loaderStop = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADER_STOP, payload: id });
  }
};

