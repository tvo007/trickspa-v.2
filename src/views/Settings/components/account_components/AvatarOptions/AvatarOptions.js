//to be deleted

import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

const AvatarOptions = ({defaultAvatars}) => {
  return (
    <Grid>
      <Typography>Purpose/Todo</Typography>
      <Typography>displays various options to set up avatar</Typography>
      <Typography>
        map out defaultAvatar api and display in a popup drop down menu
      </Typography>
      <Typography>add a custom url option</Typography>
      <Typography>default to initials of first and last name if ''</Typography>
    </Grid>
  );
};

AvatarOptions.propTypes = {};

export default AvatarOptions;
