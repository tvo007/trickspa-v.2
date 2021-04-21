//to be deleted

import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import PageHeading from '../../components/PageHeading'
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  divider: {
    background: 'black',
  },
}));

const ProfileView = props => {
  const classes = useStyles ();
  return (
    <Grid container>

      <Grid item xs={12}>
        <PageHeading title="Profile" />
      </Grid>
      <Grid container justify="center">
        <Typography variant="body1">Profile section under construction</Typography>
      </Grid>
    </Grid>
  );
};

ProfileView.propTypes = {};

export default ProfileView;
