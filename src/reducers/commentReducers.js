import {
  COMMENTS_GET_BY_POST_REQUEST,
  COMMENTS_GET_BY_POST_SUCCESS,
  COMMENTS_GET_BY_POST_FAIL,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL,
} from '../constants/commentConstants';

export const commentsByPostReducer = (state = {comments: []}, action) => {
  switch (action.type) {
    case COMMENTS_GET_BY_POST_REQUEST:
      return {loading: true, comments: []};
    case COMMENTS_GET_BY_POST_SUCCESS:
      return {loading: false, comments: action.payload};
    case COMMENTS_GET_BY_POST_FAIL:
      return {loading: false, comments: action.payload};
    default:
      return state;
  }
};

export const commentCreateReducer = (state = {comment: {}}, action) => {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case COMMENT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        comment: action.payload,
      };
    case COMMENT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
