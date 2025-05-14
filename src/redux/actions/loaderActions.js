import { LOADER_ACTIVE, LOADER_STOP, CLEAR_ERRORS } from "./index";


export const loaderActive = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADER_ACTIVE, payload: id });
  };
};

export const loaderStop = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADER_STOP, payload: id });
  }
};

export const clearErrors = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ERRORS, payload: null });
  }
}