import { CHANGE_LANGUAGE } from "../actions";

// Obtener el idioma guardado o usar 'es' como predeterminado
const savedLanguage = localStorage.getItem('userLanguage') || 'es';



const initialState = {
    language: savedLanguage,
}


const languageReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_LANGUAGE:
        return {
          ...state,
          language: action.payload
        };
      default:
        return state;
    }
  };
  
  export default languageReducer;
