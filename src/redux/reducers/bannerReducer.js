import { GET_IMAGES_ERROR, GET_IMAGES_SUCCESS } from "../actions";

const initialState = {
    images: [],
    error: null,

}

export default function bannerReducer(state = initialState, action){
    switch (action.type) {

        case GET_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.payload,
                error: null
            };
        case GET_IMAGES_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

