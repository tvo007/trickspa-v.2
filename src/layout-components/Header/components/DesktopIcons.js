import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
import {IconButton, Grid, Typography, Button} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';

const DesktopIcons = ({userInfo, isDesktop, classes, logoutHandler, history, loginSuccess}) => {
  return (
    <Fragment>

      {loginSuccess && isDesktop
        ? <Grid item>
            <IconButton
              className={classes.signOutButton}
              color="default"
              onClick={logoutHandler}
            >
              <InputIcon />
            </IconButton>
          </Grid>
        : !loginSuccess && isDesktop
            ? <Grid item>
                <Button
                  className={classes.signInButton}
                  color="default"
                  onClick={() => history.push ('/landing')}
                  size="small"
                >
                  <Typography>
                    Log In
                  </Typography>

                </Button>
              </Grid>
            : null}
    </Fragment>
  );
};

// DesktopIcons.propTypes = {};

export default DesktopIcons;
