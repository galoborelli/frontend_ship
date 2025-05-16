import axios from "axios";
import { GET_IMAGES_ERROR, GET_IMAGES_SUCCESS } from "../actions";
import { loaderActive, loaderStop } from "./loaderActions"; // Asegurate de importar estas

const getImages = () => {
    return async (dispatch) => {
        const loaderId = "getImages"; // ID único para identificar este loader

        dispatch(loaderActive(loaderId)); // ⏳ Activa loader

        try {
            const url = import.meta.env.VITE_API_URL.replace(/\/$/, '');
            const response = await axios.get(`${url}/api/images`);
            // Log para ver la informacion que trae del back
            console.log(response.data);
            dispatch({ type: GET_IMAGES_SUCCESS, payload: response.data });
        } catch (error) {
            const errorMessage = error.response?.data || error.message || 'Error al cargar las imágenes';
            dispatch({ type: GET_IMAGES_ERROR, payload: errorMessage });
        } finally {
            dispatch(loaderStop(loaderId)); // ✅ Detiene loader
        }
    };
};

export default getImages;
