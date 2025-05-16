import axios from "axios";
import {
  GET_IMAGES_ERROR,
  GET_IMAGES_SUCCESS,

} from "../actions";

const getImages = () => {
  return async (dispatch) => {

    try {
      const url = import.meta.env.VITE_API_URL.replace(/\/$/, '');
      const response = await axios.get(`${url}/api/images`);
      dispatch({ type: GET_IMAGES_SUCCESS, payload: response.data });
    } catch (error) {
      const errorMessage = error.response?.data || error.message || 'Error al cargar las imágenes';
      dispatch({ type: GET_IMAGES_ERROR, payload: errorMessage });
    }
  };
};

export default getImages;
