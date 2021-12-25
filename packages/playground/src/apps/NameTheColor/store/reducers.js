import { ACTIONS } from './dispatchers';
import initialState from './state';

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_COLOR_BY_HEX:
    case ACTIONS.FETCH_COLOR_BY_RGB: {
      return {
        ...state,
        requesting: true,
      };
    }
    case ACTIONS.UPDATE_COLOR_DETAILS: {
      return {
        ...state,
        error: false,
        requesting: false,
        colorDetails: action.colorDetails,
      };
    }
    default: {
      return initialState;
    }
  }
};

export default colorReducer;
