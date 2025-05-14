import { CHANGE_LANGUAGE } from './index';


export const changeLanguage = (language) => {
  // Guardar en localStorage
  localStorage.setItem('userLanguage', language);
  
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  };
};