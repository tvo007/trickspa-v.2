//to be deleted

import React from 'react';
// import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  // Card,
  // CardHeader,
  // CardContent,
  // Divider,
  TextField,
  Button,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  buttonText: {
    color: theme.palette.primary.contrastText,
  },
}));

const Reply = ({submitHandler, handleSubmit, register, errors, reset}) => {
  const classes = useStyles ();

  return (
    <form onSubmit={handleSubmit (submitHandler)}>

      <Grid container direction="column" spacing={1}>
        <Grid item>
          <TextField
            fullWidth
            name="body"
            id="body"
            inputRef={register}
            variant="outlined"
            placeholder="Leave a comment"
            helperText={errors.body ? errors.body.message : null}
            error={errors.body ? true : false}
          />
        </Grid>
        <Grid item container justify="flex-end">
          <Button
            color="primary"
            variant="contained"
            size="small"
            type="submit"
          >
            <Typography variant="button" className={classes.buttonText}>
              Reply <CreateIcon fontSize="small" />
            </Typography>
          </Button>
        </Grid>

      </Grid>
    </form>
  );
};

// Reply.propTypes = {};

export default Reply;
