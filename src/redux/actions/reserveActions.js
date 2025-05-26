import axios from "axios";
import {POST_BOOKING_SUCCESS, POST_BOOKING_ERROR, UPDATE_BOOKING, GET_BOOKING_SUCCESS, GET_BOOKING_ERROR} from "../actions";

export const updateBooking = (formData) => {
    return {
      type: UPDATE_BOOKING,
      payload: formData,
    };
  };
  

  export const createReserve = (reserve) => {
    return async (dispatch) => {
      try {
        const url = import.meta.env.VITE_API_URL.replace(/\/$/, "");
        const response = await axios.post(`${url}/api/checkout/`, reserve);
        dispatch({ type: POST_BOOKING_SUCCESS, payload: response.data });
        return response.data.checkout_url;  // Retorna la URL para usarla después
      } catch (error) {
        const errorMessage =
          error.response?.data || error.message || "Error al crear la reserva";
        dispatch({ type: POST_BOOKING_ERROR, payload: errorMessage });
        throw error; // Lanza error para manejarlo en el componente
      }
    };
  };
  

  export const getReserves = (date) => {
    return async (dispatch) => {
      try {
        const url = import.meta.env.VITE_API_URL.replace(/\/$/, "");
        const response = await axios.get(`${url}/api/reserves/${date}`);
        console.log(response.data);
        return response.data;
      } catch (error) {
        const errorMessage =
          error.response?.data || error.message || "Error al obtener las reservas";
        dispatch({ type: GET_BOOKING_ERROR, payload: errorMessage });
      }
    };
  };