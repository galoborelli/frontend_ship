import { LOADER_ACTIVE, LOADER_STOP, CLEAR_ERRORS } from '../actions/index';

const initialState = {
  isLoadingById: {}, // { [id]: true | false }
};

export default function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case LOADER_ACTIVE:
      if (!action.payload) return state;
      return {
        ...state,
        isLoadingById: {
          ...state.isLoadingById,
          [action.payload]: true,
        },
      };

    case LOADER_STOP:
      if (!action.payload) return state;
      return {
        ...state,
        isLoadingById: {
          ...state.isLoadingById,
          [action.payload]: false,
        },
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        isLoadingById: {},
      };

    default:
      return state;
  }
}
