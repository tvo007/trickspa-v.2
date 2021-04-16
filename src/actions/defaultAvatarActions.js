import axios from 'axios';
import {
  DEFAULT_AVATARS_GET_SUCCESS,
  DEFAULT_AVATARS_GET_REQUEST,
  DEFAULT_AVATARS_GET_FAIL,
} from '../constants/defaultAvatarConstants';
import api from '../utils/api';

export const getDefaultAvatars = () => async dispatch => {
  try {
    dispatch ({
      type: DEFAULT_AVATARS_GET_REQUEST,
    });

    const {data} = await axios.get (`${api}/default-avatars`);

    dispatch ({
      type: DEFAULT_AVATARS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch ({
      type: DEFAULT_AVATARS_GET_FAIL,
      payload: message,
    });
  }
};
