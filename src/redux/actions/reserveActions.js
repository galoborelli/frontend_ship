import axios from "axios";
import {POST_BOOKING_SUCCESS, POST_BOOKING_ERROR, UPDATE_BOOKING} from "../actions";

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
        const response = await axios.post(`${url}/api/reserves/`, reserve);
        console.log(response.data);
        dispatch({ type: POST_BOOKING_SUCCESS, payload: response.data });
      } catch (error) {
        const errorMessage =
          error.response?.data || error.message || "Error al crear la reserva";
        dispatch({ type: POST_BOOKING_ERROR, payload: errorMessage });
      }
    };
  };
  