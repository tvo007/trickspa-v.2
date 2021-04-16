import {
    DEFAULT_AVATARS_GET_REQUEST,
    DEFAULT_AVATARS_GET_SUCCESS,
    DEFAULT_AVATARS_GET_FAIL,
} from '../constants/defaultAvatarConstants'

export const defaultAvatarsReducer = (state = {avatars: []}, action) => {
    switch (action.type) {
      case DEFAULT_AVATARS_GET_REQUEST:
        return {loading: true, avatars: []};
      case DEFAULT_AVATARS_GET_SUCCESS:
        return {loading: false, loaded: true, avatars: action.payload};
      case DEFAULT_AVATARS_GET_FAIL:
        return {loading: false, error: action.payload};
      default:
        return state;
    }
  };

