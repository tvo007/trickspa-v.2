import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import ProfileView from './ProfileView';
import {useParams, useHistory} from 'react-router-dom';

// import {getPosts} from '../../actions/postActions';
import {getProfile, getProfileAuth} from '../../actions/profileActions';
// import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';
import {showSnackbar} from '../../actions/alertActions';

const Profile = props => {
  const {profileSlug} = useParams ();
  const dispatch = useDispatch ();
  const history = useHistory ();
  const {userInfo, loaded: isLoggedIn} = useSelector (state => state.userLogin);

  const {
    userProfile,
    loading: profileLoading,
    error: profileError,
    loaded: profileLoaded,
    isOwner,
  } = useSelector (state => state.userProfile);

  useEffect (
    () => {
      dispatch (getProfile (profileSlug));
    },
    [dispatch, profileSlug]
  );

  useEffect (
    () => {
      if (profileLoaded && isLoggedIn) {
        try {
          // dispatch (
          dispatch (getProfileAuth (userInfo.slug, userProfile.slug));
        } catch (error) {
          console.log (error);
          dispatch (showSnackbar ('Something went wrong.'));
          history.push ('/404');
        }
      }
    },
    [dispatch, userProfile, profileLoaded, isLoggedIn, userInfo, history]
  );

  return (
    <ProfileView
      // avatar={userInfo.user.avatar}
      userProfile={userProfile}
      profileLoading={profileLoading}
      profileError={profileError}
      isLoggedIn={isLoggedIn}
      isOwner={isOwner}
      profileLoaded={profileLoaded}
    />
  );
};

// Profile.propTypes = {};

export default Profile;
