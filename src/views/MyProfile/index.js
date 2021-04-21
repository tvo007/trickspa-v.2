import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

// import {getPosts} from '../../actions/postActions';
import {getMyProfile} from '../../actions/profileActions';
// import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';
import {Typography} from '@material-ui/core';

//personal profile route, do the long way round and see how to refactor

const MyProfile = props => {
  const dispatch = useDispatch ();
  const history = useHistory ();

  //loaded from getMyProfile useEffect

  const {userInfo, loaded} = useSelector (state => state.userLogin);
  const {
    userProfile,
    // loading: profileLoading,
    // error: profileError,
  } = useSelector (state => state.userProfile);

  useEffect (
    () => {
      if (!loaded) {
        history.push ('/landing');
      } else if (userInfo) {
        dispatch (getMyProfile (userInfo.user.uuid));
        if (loaded) {
          try {
            history.push (`/profile/${userProfile[0].slug}`);
          } catch (error) {
            history.push ('/landing');
          }
        }
      }
    },
    [history, userInfo, dispatch, loaded, userProfile]
  );

  return <Typography>Redirecting</Typography>;
};

// Profile.propTypes = {};

export default MyProfile;
