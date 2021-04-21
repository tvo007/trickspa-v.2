import React, {useEffect} from 'react';
// import PropTypes from 'prop-types'
import SettingsView from './SettingsView';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getMyProfile} from '../../actions/profileActions';
import {clearSnackbar} from '../../actions/alertActions'

const Settings = props => {

  const history = useHistory ();
  const dispatch = useDispatch ();
  const {userInfo, loaded: isLoggedIn} = useSelector (state => state.userLogin);

  const {
    userProfile,
    loading: profileLoading,
    loaded: profileLoaded,
    error: profileError,
  } = useSelector (state => state.userProfile);


  

  useEffect (
    () => {
      if (!isLoggedIn) {
        history.push ('/landing');
      } else if (isLoggedIn) {
        try {
          dispatch (getMyProfile (userInfo.user.uuid));
        } catch (error) {
          alert ('Something went wrong.');
        }
      }
    },
    [history, userInfo, isLoggedIn, dispatch]
  );

 

  //for the above useEffect, getMyProfile => getProfileAuth???

  return (
    <SettingsView
      isLoggedIn={isLoggedIn}
      userInfo={userInfo}
      profileLoaded={profileLoaded}
      userProfile={userProfile[0]}
      profileLoading={profileLoading}
    />
  );
};

// Settings.propTypes = {

// }

export default Settings;
