
import {UPDATE_BOOKING, POST_BOOKING_ERROR, POST_BOOKING_SUCCESS, GET_BOOKING_ERROR, GET_BOOKING_SUCCESS } from "../actions";



const initialState = {
    bookings: [],
    bookingForm: {id_reserve: "", name: "", contact: "", date_selected: null, time_selected: "1", message: "", quantity: "", status: "", amount: 100, terms: false},
    error: null,
};


export default function bookingReducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_BOOKING:
            return {
                ...state,
                bookingForm: action.payload
            };
        case POST_BOOKING_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case POST_BOOKING_SUCCESS:
            return {
                ...state,
                bookingForm: action.payload
            }
        case GET_BOOKING_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_BOOKING_SUCCESS:
            return {
                ...state,
                bookings: action.payload
            }
        default:
            return state;
    }

}