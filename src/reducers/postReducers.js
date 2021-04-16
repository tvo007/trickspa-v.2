import {
  POSTS_GET_REQUEST,
  POSTS_GET_SUCCESS,
  POSTS_GET_FAIL,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
  POST_CREATE_SUCCESS,
  POST_CREATE_REQUEST,
  POST_CREATE_FAIL,
  POST_CREATE_RESET,
  // POST_EDIT_REQUEST,
  // POST_EDIT_SUCCESS,
  // POST_EDIT_FAIL,
  // POST_DELETE_REQUEST,
  // POST_DELETE_SUCCESS,
  // POST_DELETE_FAIL,
} from '../constants/postConstants';

export const postListReducer = (state = {posts: []}, action) => {
  switch (action.type) {
    case POSTS_GET_REQUEST:
      return {loading: true, posts: []};
    case POSTS_GET_SUCCESS:
      return {loading: false, posts: action.payload};
    case POSTS_GET_FAIL:
      return {loading: false, posts: action.payload};
    default:
      return state;
  }
};

export const postDetailsReducer = (state = {post: {}}, action) => {
  switch (action.type) {
    case POST_GET_REQUEST:
      return {...state, loading: true};
    case POST_GET_SUCCESS:
      return {
        loading: false,
        post: action.payload,
      };
    case POST_GET_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const postCreateReducer = (state = {post: {}}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return {
        loading: true,
      };
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        post: action.payload,
      };
    case POST_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case POST_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
