import axios from 'axios';
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_UPDATE,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_ACCOUNT_UPDATE_FAIL,
  USER_ACCOUNT_UPDATE_SUCCESS,
  USER_ACCOUNT_UPDATE_REQUEST,
  USER_ACCOUNT_UPDATE_RESET,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  CLEAR_USER,
  CLEAR_LOGOUT_STATE,
} from '../constants/userConstants';
import {CLEAR_PROFILE, CLEAR_MY_SLUG} from '../constants/profileConstants';
import {SET_ALERT} from '../constants/alertConstants';
import api from '../utils/api';

// in progress
export const login = ({email, password}) => async dispatch => {
  try {
    dispatch ({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
        'Access-Control-Allow-Origin': true,
      },
    };

    const {data} = await axios.post (
      `${api}/auth/local`,
      {identifier: email, password: password},
      config
    );

    dispatch ({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    dispatch ({type: SET_ALERT, message: 'Login succesful!'});
  } catch (error) {
    dispatch ({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
    dispatch ({type: SET_ALERT, message: 'Something went wrong!'});
  }
};

//in progress

// export const logout = () => dispatch => {
//   dispatch ({type: USER_LOGOUT});
//   dispatch ({type: USER_DETAILS_RESET});
//   document.location.href = '/login';
// };

export const logout = () => async dispatch => {
  try {
    dispatch ({
      type: USER_LOGOUT_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
        // 'Access-Control-Allow-Credentials': true,
      },
    };

    const {data} = await axios.post (`${api}/auth/logout`, config);

    dispatch ({
      type: USER_LOGOUT_SUCCESS,
      payload: data,
    });
    dispatch ({
      type: CLEAR_USER,
    });
    // document.location.href = '/forums'
    dispatch ({
      type: CLEAR_PROFILE,
    });
    dispatch ({
      type: CLEAR_MY_SLUG,
    });
    dispatch ({
      type: CLEAR_LOGOUT_STATE,
    });
    // document.location.href = '/forums';
  } catch (error) {
    dispatch ({
      type: USER_LOGOUT_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

//^^clear out state

export const signup = ({username, email, password}) => async dispatch => {
  try {
    dispatch ({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
        // 'Access-Control-Allow-Credentials': true,
      },
    };

    const {data} = await axios.post (
      `${api}/auth/local/register`,
      {username, email, password},
      config
    );

    dispatch ({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch ({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getUserDetails = id => async (dispatch, getState) => {
  try {
    dispatch ({
      type: USER_DETAILS_REQUEST,
    });

    const {userLogin: {userInfo}} = getState ();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const {data} = await axios.get (`/api/users/${id}`, config);

    dispatch ({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch (logout ());
    }
    dispatch ({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch ({
      type: USER_LIST_REQUEST,
    });

    const {userLogin: {userInfo}} = getState ();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const {data} = await axios.get ('/api/users', config);

    dispatch ({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch (logout ());
    }
    dispatch ({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};

export const deleteUser = id => async (dispatch, getState) => {
  try {
    dispatch ({
      type: USER_DELETE_REQUEST,
    });

    const {userLogin: {userInfo}} = getState ();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete (`/api/users/${id}`, config);

    dispatch ({type: USER_DELETE_SUCCESS});
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch (logout ());
    }
    dispatch ({
      type: USER_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateUserAccount = (id, formData) => async (
  dispatch,
  getState
) => {
  try {
    dispatch ({
      type: USER_ACCOUNT_UPDATE_REQUEST,
    });

    const {userLogin: {userInfo}} = getState ();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
        Authorization: `Bearer ${userInfo.token}`,
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Origin': true,
      },
    };

    const {data} = await axios.put (`${api}/users/${id}`, formData, config);

    // dispatch ({type: USER_ACCOUNT_UPDATE_SUCCESS});

    dispatch ({type: USER_ACCOUNT_UPDATE_SUCCESS});

    dispatch ({type: USER_LOGIN_UPDATE, payload: data});

    dispatch ({type: SET_ALERT, message: 'Account update succesful!'});
    //updates userLogin state upon successful update

    // dispatch ({type: USER_ACCOUNT_UPDATE_RESET});
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch (logout ());
    }
    dispatch ({
      type: USER_ACCOUNT_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const updatePassword = ({
  email,
  password,
  newPassword,
  confirmPassword,
}) => async (dispatch, getState) => {
  try {
    dispatch ({
      type: USER_ACCOUNT_UPDATE_REQUEST,
    });

    const {userLogin: {userInfo}} = getState ();

    const emailLowerCased = email.toLowerCase ();

    if (emailLowerCased === userInfo.user.email) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          withCredentials: true,
          Authorization: `Bearer ${userInfo.token}`,
          // 'Access-Control-Allow-Credentials': true,
          // 'Access-Control-Allow-Origin': true,
        },
      };

      const {data} = await axios.post (
        `${api}/auth/pwreset`,
        {
          identifier: emailLowerCased,
          password: password,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        },
        config
      );

      dispatch ({type: USER_ACCOUNT_UPDATE_SUCCESS});
      //updates userLogin state upon successful update
      dispatch ({type: USER_LOGIN_SUCCESS, payload: data});

      dispatch ({type: SET_ALERT, message: 'Password updated successfully'});
    } else {
      dispatch ({
        type: USER_ACCOUNT_UPDATE_FAIL,
        payload: 'Email does not match currnent user.',
      });
      dispatch ({
        type: SET_ALERT,
        message: 'Email does not match current user.',
      });
    }

    // dispatch ({type: USER_ACCOUNT_UPDATE_SUCCESS});

    // dispatch ({type: USER_ACCOUNT_UPDATE_RESET});
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch (logout ());
    }
    dispatch ({
      type: USER_ACCOUNT_UPDATE_FAIL,
      payload: message,
    });
  }
};
