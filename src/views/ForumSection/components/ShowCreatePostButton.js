import React from 'react';
// import PropTypes from 'prop-types';
import {Grid, Button, Typography} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  buttonText: {
    color: theme.palette.primary.contrastText,
  },
}));

const ShowCreatePostButton = ({text, onClick}) => {
  const classes = useStyles ();
  return (
    <Grid item>
      <Button
        color="primary"
        variant="contained"
        size="small"
        onClick={onClick}
      >
        <Typography variant="button" className={classes.buttonText}>
          Create Post <CreateIcon fontSize="small" />
        </Typography>
      </Button>

    </Grid>
  );
};

// ShowCreatePostButton.propTypes = {};

export default ShowCreatePostButton;
