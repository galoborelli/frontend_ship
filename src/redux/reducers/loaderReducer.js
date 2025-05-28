import { LOADER_ACTIVE, LOADER_STOP } from '../actions/index';

const initialState = {
  isLoadingById: {
    id:false,
  },          //  id: true | false 
};

export default function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case LOADER_ACTIVE:
      if (!action.payload || !action.payload.id) return state;
      return {
        ...state,
        isLoadingById: {
          ...state.isLoadingById,
          [action.payload.id]: action.payload.value,
        },
      };

    default:
      return state;
  }
}
