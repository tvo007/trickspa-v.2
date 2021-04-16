import {SET_ALERT, REMOVE_ALERT} from '../constants/alertConstants';

export const showSnackbar = message => {
    return dispatch => {
      dispatch({ type: SET_ALERT, message });
    };
  };
  
  export const clearSnackbar = () => {
    return dispatch => {
      dispatch({ type: REMOVE_ALERT });
    };
  };