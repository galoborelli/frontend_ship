import { LOADER_ACTIVE, LOADER_STOP } from "./index";


export const loaderActive = ({ id, value }) => {
  return (dispatch) => {
    console.log("Activando loader para:", id, value);
    dispatch({ type: LOADER_ACTIVE, payload: { id, value } });
  };
};

export const loaderStop = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADER_STOP, payload: id });
  };
};
