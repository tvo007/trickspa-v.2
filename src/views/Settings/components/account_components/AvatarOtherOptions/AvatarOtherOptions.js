import React from 'react';
// import PropTypes from 'prop-types';
import {Button, Grid} from '@material-ui/core';

import useStyles from '../../../FormStyles';
import {useSelector} from 'react-redux';

const AvatarOtherOptions = ({setImagePreview}) => {
  const {userInfo: {user: {avatar}}} = useSelector (state => state.userLogin);

  const classes = useStyles ();
  return (
    <Grid container>
      <Button
        className={classes.submitButton}
        color="primary"
        variant="contained"
        onClick={() => setImagePreview (`${avatar}`)}
      >
        Reset Avatar
      </Button>
      <Button
        className={classes.submitButton}
        color="primary"
        variant="contained"
        onClick={() => setImagePreview ('')}
      >
        Use Your Initials
      </Button>
    </Grid>
  );
};

// AvatarOtherOptions.propTypes = {};

export default AvatarOtherOptions;
