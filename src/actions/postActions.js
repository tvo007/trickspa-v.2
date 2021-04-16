/* eslint-disable no-unused-vars */
import axios from 'axios';
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
  POST_EDIT_REQUEST,
  POST_EDIT_SUCCESS,
  POST_EDIT_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
} from '../constants/postConstants';
import api from '../utils/api';

export const getPostsBySection = forumSlug => async dispatch => {
  try {
    dispatch ({
      type: POSTS_GET_REQUEST,
    });

    //     const {userLogin: {userInfo}} = getState ();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    //TODO: ^^ ADD AUTH

    const {data} = await axios.get (`${api}/posts?section.slug=${forumSlug}`);

    dispatch ({
      type: POSTS_GET_SUCCESS,
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
      type: POSTS_GET_FAIL,
      payload: message,
    });
  }
};

export const getPost = postSlug => async dispatch => {
  try {
    dispatch ({
      type: POST_GET_REQUEST,
    });

    const {data} = await axios.get (`${api}/posts/slug/${postSlug}`);

    dispatch ({
      type: POST_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch ({
      type: POST_GET_FAIL,
      payload: message,
    });
  }
};

//what does a post need: section slug/or id??, formdata: title, body, userRef
//

/**
export const createPost = (formData, sectionSlug) => async (dispatch, getState) => {
 * 
 */
export const createPost = formData => async dispatch => {
  try {
    dispatch ({
      type: POST_CREATE_REQUEST,
    });

    // const {userLogin: {userInfo}} = getState ();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const {data} = await axios.post (`${api}/posts`, formData, config);

    dispatch ({
      type: POST_CREATE_SUCCESS,
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
      type: POST_CREATE_FAIL,
      payload: message,
    });
  }
};
