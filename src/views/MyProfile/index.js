import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import { useSelector} from 'react-redux';
import {Typography} from '@material-ui/core';
//personal profile route, do the long way round and see how to refactor

const MyProfile = props => {
  const history = useHistory ();

  const {userInfo, loaded} = useSelector (state => state.userLogin);
  useEffect (() => {
    if (!loaded) {
      history.push ('/login');
    } else if (loaded) {
      history.push (`/profile/${userInfo.slug}`);
    }
  }, []);

  return <Typography>Redirecting</Typography>;
};

// Profile.propTypes = {};

export default MyProfile;
