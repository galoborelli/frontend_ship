import axios from "axios";
import {POST_BOOKING_SUCCESS, POST_BOOKING_ERROR, UPDATE_BOOKING} from "../actions";
import { loaderActive } from "./loaderActions";


export const updateBooking = (formData) => {
    return {
      type: UPDATE_BOOKING,
      payload: formData,
    };
  };
  


export const fetchAvailability = (formattedDate, setDateAvailability) => {
    return async (dispatch) => {
    try {
        dispatch(loaderActive({ id: "screen", value: true }));
        console.log("disponibilidad");
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/reserves/${formattedDate}/`);
        console.log("Disponibilidad:", response.data);
        setDateAvailability(response.data);
    } catch (error) {
        console.error("Error fetching availability:", error);
        alert(error.message || "Error al obtener la disponibilidad.");
        setDateAvailability([]);
    } finally {
        dispatch(loaderActive({ id: "screen", value: false }));
      }
    };
};



  export const createReserveCard = (reserve) => {
    return async (dispatch) => {
      try {
        const url = import.meta.env.VITE_API_URL.replace(/\/$/, "");
        const response = await axios.post(`${url}/api/checkout/`, reserve);
        dispatch({ type: POST_BOOKING_SUCCESS, payload: response.data });
        return response.data.checkout_url;  // Retorna la URL para usarla después
      } catch (error) {
        const errorMessage =
          error.response?.data || error.message || "Error al crear la reserva";
          alert(errorMessage);
        dispatch({ type: POST_BOOKING_ERROR, payload: errorMessage });
        throw error; // Lanza error para manejarlo en el componente
        
      } 
    };
  };
  

export const createReserveCash = (reserve,setDateAvailability) => {
    return async (dispatch) => {
      try {
        const url = import.meta.env.VITE_API_URL.replace(/\/$/, "");
        const response = await axios.post(`${url}/api/checkout_cash/`, reserve);
        dispatch({ type: POST_BOOKING_SUCCESS, payload: response.data });
        dispatch(fetchAvailability(reserve.date_selected,setDateAvailability)); // Actualiza los horarios disponibles
        return response.data;
      } catch (error) {
        const errorMessage =
          error.response?.data || error.message || "Error al crear la reserva";
          alert(errorMessage);
        dispatch({ type: POST_BOOKING_ERROR, payload: errorMessage });
        throw error; // Lanza error para manejarlo en el componente 
      } 
    };
  };


  export const submitReservation = (formData, setDateAvailability, t) => async (dispatch) => {
    try {
      
      dispatch(loaderActive({ id: "screen", value: true }));

      if (!formData.terms) {
        return alert(t("reserve.terms"));
      }
    //  if (formData.method_payment === "cash") {
        const response = await dispatch(createReserveCash(formData, setDateAvailability));
        console.log(response);
        dispatch({
          type: "RESERVATION_SUCCESS",
          payload: formData, // guarda la data para mostrar en el modal
      });
    //   } else if (formData.method_payment === "card") {
    //     const checkoutUrl = await dispatch(createReserveCard(formData));
    //     if (checkoutUrl) {
    //       window.location.href = checkoutUrl;
    //     }
    //   }
     } catch (error) {
      console.error("Error al enviar la reserva:", error);
      alert("Ocurrió un error al enviar la reserva.");
    } finally {
       dispatch(loaderActive({ id: "screen", value: false }));
    }
  };
  