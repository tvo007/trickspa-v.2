import React, {useEffect} from 'react';
// import PropTypes from 'prop-types'
import SettingsView from './SettingsView';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../../actions/profileActions';
import {showSnackbar} from '../../actions/alertActions';
import {CLEAR_PROFILE} from '../../constants/profileConstants';

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

  useEffect (() => {
    if (!isLoggedIn) {
      history.push ('/landing');
    } else if (isLoggedIn) {
      dispatch ({type: CLEAR_PROFILE});
      try {
        dispatch (getProfile (userInfo.slug));
      } catch (error) {
        dispatch (showSnackbar ('Something went wrong.'));
      }
    }
  }, []);

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
