import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import ProfileView from './ProfileView';
import {useParams} from 'react-router-dom';

// import {getPosts} from '../../actions/postActions';
import {getProfile, getProfileAuth} from '../../actions/profileActions';
// import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';
const Profile = props => {
  const {profileSlug} = useParams ();
  const dispatch = useDispatch ();

  const {userInfo, loaded: isLoggedIn} = useSelector (state => state.userLogin);

  const {
    userProfile,
    loading: profileLoading,
    error: profileError,
    loaded: profileLoaded,
    isOwner,
  } = useSelector (state => state.userProfile);

  // const {username: loginUsername} = userInfo;
  // const {users_permissions_user: {username: profileUsername}} = userProfile[0];

  // useEffect (
  //   () => {
  //     if (profileLoading) {
  //       setIsLoading (true);
  //     } else if (userProfile) setIsLoading (false);
  //   },
  //   [profileLoading, userProfile]
  // );

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
          dispatch (
            getProfileAuth (
              userInfo.user.username,
              userProfile[0].users_permissions_user.username
            )
          );

          // console.log (userProfile[0].users_permissions_user.username);
        } catch (error) {
          console.log (error);
        }
        // console.log (userProfile[0].users_permissions_user.username);
      }
    },
    [dispatch, userProfile, profileLoaded, isLoggedIn, userInfo]
  );

  // useEffect (
  //   () => {
  //     if (profileLoading) {
  //       setIsLoading(true)
  //     }
  //     // if (userProfile[0].users_permissions_user.username)
  //     // dispatch (getProfileAuth());
  //   },
  //   [dispatch, userProfile]
  // );

  // useEffect(
  //   () => {
  //   if (!isEmpty(userProfile)) {
  //     console.log(userProfile[0].users_permissions_user.username)
  //   }

  // }, [userProfile])

  // useEffect (
  //   () => {
  //     if (!isEmpty(userProfile) && !isEmpty(userProfile)) {
  //       try {
  //         if (userInfo.username === userProfile[0].users_permissions_user.username) {
  //           setIsOwner (true);
  //           console.log(userProfile[0].users_permissions_user.username)

  //         }

  //       } catch (error) {

  //         alert ('Something went wrong');
  //       }
  //     }
  //   },
  //   [userInfo, userProfile, setIsOwner]
  // );

  //check to see if is own profile

  return (
    <ProfileView
      userProfile={userProfile[0]}
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
