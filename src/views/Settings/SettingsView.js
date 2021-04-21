import React, {useState, Fragment} from 'react';
// import PropTypes from 'prop-types';
import {Grid, Button, ButtonGroup} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import ProfileSettings from './components/ProfileSettings';
import AccountSettings from './components/AccountSettings';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  root: {},
  card: {
    marginBottom: theme.spacing (2),
  },
  button: {
    justifyContent: 'start',
  },
  user: {},
  basic: {},
}));

const SettingsView = ({
  isLoggedIn,
  userInfo,
  profileLoaded,
  userProfile,
  profileLoading,
}) => {
  const classes = useStyles ();

  const [profileSettingsActive, setProfileSettingsActive] = useState (true);

  const handleClick = () => setProfileSettingsActive (!profileSettingsActive);

  return (
    <Grid container spacing={4}>
      {isLoggedIn && profileLoaded
        ? <Fragment>
            <Grid item xs={12}>
              <PageHeading title={`Settings for ${userInfo.user.username}`} />
            </Grid>
            <Grid item xs={4}>
              <ButtonGroup
                aria-label="vertical outlined primary button group"
                color="primary"
                fullWidth
                orientation="vertical"
              >
                <Button
                  className={classes.button}
                  disableElevation
                  onClick={handleClick}
                  variant={profileSettingsActive ? 'contained' : 'outlined'}
                >
                  Profile
                </Button>
                <Button
                  className={classes.button}
                  disableElevation
                  onClick={handleClick}
                  variant={!profileSettingsActive ? 'contained' : 'outlined'}
                >
                  Account
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={8}>
              {profileSettingsActive
                ? <ProfileSettings
                    userInfo={userInfo}
                    userProfile={userProfile}
                    profileLoaded={profileLoaded}
                    profileLoading={profileLoading}
                    isLoggedIn={isLoggedIn}
                  />
                : <AccountSettings />}
            </Grid>{' '}
          </Fragment>
        : null}

    </Grid>
  );
};

// SettingsView.propTypes = {};

export default SettingsView;
