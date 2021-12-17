import { ACTIONS } from './dispatchers';
import initialState from './state';

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_COLOR_BY_RGB_SUCCESS:
    case ACTIONS.FETCH_COLOR_BY_HEX_SUCCESS: {
      const { colorData } = action;
      return {
        ...state,
        requesting: false,
        error: false,
        colorData,
      };
    }
    default: {
      return initialState;
    }
  }
};

export default colorReducer;
