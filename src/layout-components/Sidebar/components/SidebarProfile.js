import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Avatar, Typography, Grid} from '@material-ui/core';
// import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles (theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  profileInfo: {
    marginTop: theme.spacing (1),
    overflowX: 'hidden',
  },
}));

const SidebarProfile = ({className, openMini}) => {
  const classes = useStyles ();

  return (
    <div className={clsx (classes.root, className)}>
      <Grid>

        <Grid
          container
          direction="row"
          justify="space-around"
          spacing={3}
        >
          <Grid item>
            {openMini
              ? <Grid
                container
                spacing={3}
                style={{paddingRight: '70px'}}
                wrap="nowrap"
              >
                <Grid item>
                  <Avatar
                    alt="Person"
                    className={classes.avatar}
                    component={RouterLink}
                    src="https://res.cloudinary.com/ddj5orpun/image/upload/c_scale,w_200/v1569892155/samples/landscapes/beach-boat.jpg"
                    to="/Dashboard"
                  />
                </Grid>
                <Grid
                  item
                  zeroMinWidth
                >
                  <Typography
                    className={classes.profileInfo}
                    noWrap
                    variant="body2"
                  >
                      YOUR NAME
                  </Typography>

                  <Typography
                    className={classes.profileInfo}
                    noWrap
                    variant="body2"
                  >
                      YOUR BIO
                  </Typography>
                </Grid>

              </Grid>
              : <Grid
                container
                spacing={3}
              >
                <Grid item>
                  <Avatar
                    alt="Person"
                    className={classes.avatar}
                    component={RouterLink}
                    src="https://res.cloudinary.com/ddj5orpun/image/upload/c_scale,w_200/v1569892155/samples/landscapes/beach-boat.jpg"
                    to="/Dashboard"
                  />
                </Grid>
              </Grid>}

          </Grid>

        </Grid>

      </Grid>

    </div>
  );
};

// SidebarProfile.propTypes = {};

export default SidebarProfile;
