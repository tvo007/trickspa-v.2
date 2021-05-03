import React from 'react';
// import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  // Typography,
} from '@material-ui/core';

import useStyles from '../../../FormStyles';

const AccountForm = ({
  register,
  handleSubmit,
  submitHandler,
  errors,
  AvatarOptions,
  AvatarPreview,
  showAvatarURLForm,
  setShowAvatarURLForm,
}) => {
  const classes = useStyles ();

  return (
    <form onSubmit={handleSubmit (submitHandler)}>
      <Card className={classes.card}>
        <CardHeader title="Username" />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.username ? true : false}
            helperText={errors.username ? errors.username.message : null}
            id="username"
            inputRef={register}
            label="Username"
            name="username"
            placeholder="Enter your username"
          />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title="Avatar" />
        <CardContent className={classes.formContent}>
          {AvatarPreview}

          {AvatarOptions}

        </CardContent>
      </Card>
      <Card className={classes.submitCard}>
        <Button
          className={classes.submitButton}
          color="primary"
          variant="contained"
        >
          <input
            className={classes.submitInput}
            type="submit"
            value="Save account details"
          />
        </Button>
      </Card>
    </form>
  );
};

// AccountForm.propTypes = {};

export default AccountForm;
