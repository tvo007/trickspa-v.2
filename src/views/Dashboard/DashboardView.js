import React from 'react';
// import PropTypes from 'prop-types';
import {Typography, Grid} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';

const DashboardView = props => {
  return (
    <div>
      <PageHeading title="Dashboard" />
      <Grid container justify="center">
        <Typography variant="body1">THIS IS THE DASHBOARD CONTENT</Typography>
      </Grid>

    </div>
  );
};

// DashboardView.propTypes = {};

export default DashboardView;
