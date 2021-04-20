import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
import {IconButton, Grid, Typography, Button, Hidden} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';

const MobileIcons = ({
  userInfo,
  isDesktop,
  classes,
  logoutHandler,
  history,
  onSidebarOpen,
  loginSuccess
}) => {
  return (
    <Fragment>

      {!isDesktop && !loginSuccess
        ? <Grid item container direction="row" justify="flex-end">
            <Grid item>
              <Hidden lgUp>
                <IconButton onClick={onSidebarOpen} color="default">
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Grid>
            <Grid item>
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
          </Grid>
        : !isDesktop && loginSuccess
            ? <Grid item container direction="row" justify="flex-end">
                <Grid item>
                  <Hidden lgUp>
                    <IconButton onClick={onSidebarOpen} color="default">
                      <MenuIcon />
                    </IconButton>
                  </Hidden>
                </Grid>
                <Grid item>
                  <IconButton
                    className={classes.signOutButton}
                    color="default"
                    onClick={logoutHandler}
                  >
                    <InputIcon />
                  </IconButton>
                </Grid>
              </Grid>
            : null}
    </Fragment>
  );
};

// MobileIcons.propTypes = {};

export default MobileIcons;
