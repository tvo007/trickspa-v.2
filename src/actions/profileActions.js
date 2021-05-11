import axios from 'axios';
import {
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAIL,
  PROFILE_IS_OWNER,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
} from '../constants/profileConstants';
import {SET_ALERT} from '../constants/alertConstants';

import api from '../utils/api';

// axios.defaults.withCredentials = true;

export const getProfile = profileSlug => async (dispatch, getState) => {
  try {
    //if not the same reset state and then.....

    dispatch ({
      type: PROFILE_GET_REQUEST,
    });

    const {data} = await axios.get (`${api}/profiles/slug/${profileSlug}`);

    //GETS STATE USERINFO HERE

    dispatch ({
      type: PROFILE_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch ({
      type: PROFILE_GET_FAIL,
      payload: message,
    });
  }
};

export const getMyProfile = profileSlug => async (dispatch, getState) => {
  try {
    //if not the same reset state and then.....

    dispatch ({
      type: PROFILE_GET_REQUEST,
    });

    const {data} = await axios.get (`${api}/profiles/slug/${profileSlug}`);

    //GETS STATE USERINFO HERE

    dispatch ({
      type: PROFILE_GET_SUCCESS,
      payload: data,
    });

    dispatch ({
      type: PROFILE_IS_OWNER,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch ({
      type: PROFILE_GET_FAIL,
      payload: message,
    });
  }
};

export const getProfileAuth = (userInfoSlug, profileSlug) => async (
  dispatch,
  getState
) => {
  // const {userLogin: {userInfo}} = getState ();
  try {
    if (userInfoSlug === profileSlug)
      dispatch ({
        type: PROFILE_IS_OWNER,
      });

    //GETS STATE USERINFO HERE
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch ({
      type: PROFILE_GET_FAIL,
      payload: message,
    });
  }
};

//setting up, do not use

export const updateProfile = (id, formData) => async (dispatch, getState) => {
  try {
    // const {userProfile: {userProfile}} = getState ();

    // if (userProfile.isOwner) {
    dispatch ({
      type: PROFILE_UPDATE_REQUEST,
    });

    const config = {
      // credentials: "same-origin",
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
        withCredentials: true,

        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Origin': `${api}`
      },
    };

    const {data} = await axios.put (`${api}/profiles/${id}`, formData, config);

    dispatch ({
      type: PROFILE_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch ({type: SET_ALERT, message: 'Update Successful!'});


    // }
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;

    dispatch ({
      type: PROFILE_UPDATE_FAIL,
      payload: message,
    });

    dispatch ({type: SET_ALERT, message: 'Update failed!'});

  }
};
