import axios from 'axios';
import {
  COMMENTS_GET_BY_POST_REQUEST,
  COMMENTS_GET_BY_POST_SUCCESS,
  COMMENTS_GET_BY_POST_FAIL,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL,
} from '../constants/commentConstants';
import api from '../utils/api';

export const getCommentsByPost = postSlug => async dispatch => {
  try {
    dispatch ({
      type: COMMENTS_GET_BY_POST_REQUEST,
    });

    //     const {userLogin: {userInfo}} = getState ();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    //TODO: ^^ ADD AUTH

    const {data} = await axios.get (`${api}/comments?post.slug=${postSlug}`);

    dispatch ({
      type: COMMENTS_GET_BY_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    //   if (message === 'Not authorized, token failed') {
    //     dispatch (logout ());
    //   }
    //TODO: ^^ add auth

    dispatch ({
      type: COMMENTS_GET_BY_POST_FAIL,
      payload: message,
    });
  }
};

//add comment
//needs post id
//user id

export const createComment = (formData) => async dispatch => {
  try {
    dispatch ({
      type: COMMENT_CREATE_REQUEST,
    });

    // const {userLogin: {userInfo}} = getState ();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const {data} = await axios.post (`${api}/comments`, formData, config);

    dispatch ({
      type: COMMENT_CREATE_SUCCESS,
      payload: data,
    });
    // dispatch ({
    //   type: CART_CLEAR_ITEMS,
    //   payload: data,
    // });
    // localStorage.removeItem ('cartItems');
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    // if (message === 'Not authorized, token failed') {
    //   dispatch (logout ());
    // }
    dispatch ({
      type: COMMENT_CREATE_FAIL,
      payload: message,
    });
  }
};
