import axios from 'axios';
import {
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAIL,
  PROFILE_IS_OWNER,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
  // MY_PROFILE_GET_REQUEST,
  // MY_PROFILE_GET_FAIL,
  // MY_PROFILE_GET_SUCCESS,
} from '../constants/profileConstants';
import api from '../utils/api';

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

export const getMyProfile = uuid => async (dispatch, getState) => {
  try {
    //if not the same reset state and then.....
    dispatch ({
      type: PROFILE_GET_REQUEST,
    });

    // const {userLogin: {userInfo}} = getState ();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
        // 'Access-Control-Allow-Credentials': true,
      },
    };

    const {data} = await axios.get (
      `${api}/profiles?users_permissions_user.uuid=${uuid}`,
      config
    );

    //works: `${api}/profiles?users_permissions_user.uuid=GP-vAwMnGsOJlQkl3CAXY`
    //does not work: ${api}/profiles/uuid/GP-vAwMnGsOJlQkl3CAXY

    dispatch ({
      type: PROFILE_GET_SUCCESS,
      payload: data[0],
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

export const getProfileAuth = (loginUsername, profileUsername) => async (
  dispatch,
  getState
) => {
  // const {userLogin: {userInfo}} = getState ();
  try {
    if (loginUsername === profileUsername)
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
    // }
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;

    dispatch ({
      type: PROFILE_UPDATE_FAIL,
      payload: message,
    });
  }
};
