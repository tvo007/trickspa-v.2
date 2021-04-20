import React from 'react';
import { Grid } from '@material-ui/core';

const LandingLayout = ({ children }) => {
  return (
    <Grid
      alignItems="center"
      container
      justify="center"
      style={{ height: '100%' }}>
      {children}
    </Grid>
  );
};

export default LandingLayout;
