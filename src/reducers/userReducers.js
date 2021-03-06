import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_UPDATE,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_ACCOUNT_UPDATE_REQUEST,
  USER_ACCOUNT_UPDATE_SUCCESS,
  USER_ACCOUNT_UPDATE_FAIL,
  USER_ACCOUNT_UPDATE_RESET,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  CLEAR_USER,
  CLEAR_LOGOUT_STATE,
} from '../constants/userConstants';
//in progress

export const userLoginReducer = (state = {userInfo: {}}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {loading: true, loaded: false};
    case USER_LOGIN_SUCCESS:
      return {loading: false, loaded: true, userInfo: action.payload};
    case USER_LOGIN_FAIL:
      return {loading: false, loaded: false, error: action.payload};
    case USER_LOGIN_UPDATE:
      return {...state, userInfo: {...state.userInfo, user: action.payload}};
    case CLEAR_USER:
      return {loading: false, loaded: false};
    default:
      return state;
  }
};

export const userLogoutReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
      return {loading: true};
    case USER_LOGOUT_SUCCESS:
      return {loading: false, success: true};
    case USER_LOGOUT_FAIL:
      return {loading: false, error: action.payload};
    case CLEAR_LOGOUT_STATE: {
      return {};
    }
    default:
      return state;
  }
};

//in progress

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {loading: true};
    case USER_REGISTER_SUCCESS:
      return {loading: false, success: true};
    case USER_REGISTER_FAIL:
      return {loading: false, error: action.payload};
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = {user: {}}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {...state, loading: true};
    case USER_DETAILS_SUCCESS:
      return {loading: false, user: action.payload};
    case USER_DETAILS_FAIL:
      return {loading: false, error: action.payload};
    case USER_DETAILS_RESET:
      return {user: {}};
    default:
      return state;
  }
};


export const userListReducer = (state = {users: []}, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {loading: true};
    case USER_LIST_SUCCESS:
      return {loading: false, users: action.payload};
    case USER_LIST_FAIL:
      return {loading: false, error: action.payload};
    case USER_LIST_RESET:
      return {users: []};
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return {loading: true, success: false};
    case USER_DELETE_SUCCESS:
      return {loading: false, success: true};
    case USER_DELETE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const userAccountUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ACCOUNT_UPDATE_REQUEST:
      return {loading: true, success: false};
    case USER_ACCOUNT_UPDATE_SUCCESS:
      return {loading: false, success: true};
    case USER_ACCOUNT_UPDATE_FAIL:
      return {loading: false, error: action.payload};
    case USER_ACCOUNT_UPDATE_RESET:
      return {loading: false, success: false};
    default:
      return state;
  }
};
