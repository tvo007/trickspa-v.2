import {
    PROFILE_GET_REQUEST,
    PROFILE_GET_SUCCESS,
    PROFILE_GET_FAIL,
    PROFILE_IS_OWNER,
    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_RESET,
    CLEAR_PROFILE,
} from '../constants/profileConstants'

export const userProfileReducer = (state = {userProfile: []}, action) => {
    switch (action.type) {
      case PROFILE_GET_REQUEST:
        return {...state, loading: true};
      case PROFILE_GET_SUCCESS:
        return {...state, loading: false, loaded: true, userProfile: [action.payload], isOwner: false};
      case PROFILE_IS_OWNER: 
        return {...state, isOwner: true}
      case PROFILE_GET_FAIL:
        return {loading: false, error: action.payload};
      case CLEAR_PROFILE: 
      return {userProfile: []}
      default:
        return state;
    }
  };

  export const updateProfileReducer = (state = {userProfile: []}, action) => {
    switch (action.type) {
      case PROFILE_UPDATE_REQUEST:
        return { loading: true }
      case PROFILE_UPDATE_SUCCESS:
        return { loading: false, success: true, userInfo: [action.payload] }
      case PROFILE_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case PROFILE_UPDATE_RESET:
        return {userProfile: []}
      default:
        return state
    }
  }