import {SET_ALERT, REMOVE_ALERT} from '../constants/alertConstants';

export const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        successSnackbarOpen: true,
        successSnackbarMessage: action.message,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        successSnackbarOpen: false,
        // errorSnackbarOpen: false,
        // infoSnackbarOpen: false,
      };

    default:
      return state;
  }
};

