import { OPEN_LEFT_SIDEBAR, CLOSE_LEFT_SIDEBAR } from '../actions/consts';

const initialState = {
  isOpened: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LEFT_SIDEBAR:
      return {
        ...state,
        isOpened: true,
      };

    case CLOSE_LEFT_SIDEBAR:
      return {
        ...state,
        isOpened: false,
      };

    default:
      return state;
  }
};
