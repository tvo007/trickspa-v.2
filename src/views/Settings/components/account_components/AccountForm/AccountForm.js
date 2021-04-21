import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';

import useStyles from '../../../FormStyles';

const AccountForm = ({
  register,
  handleSubmit,
  submitHandler,
  errors,
  AvatarOptions
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
          <TextField
            error={errors.avatar ? true : false}
            helperText={errors.avatar ? errors.avatar.message : null}
            id="avatar"
            inputRef={register}
            label="Avatar"
            name="avatar"
            placeholder="Choose an avatar"
          />
          {AvatarOptions}
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title="Password" />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.currentPassword ? true : false}
            fullWidth
            helperText={
              errors.currentPassword ? errors.currentPassword.message : null
            }
            id="currentPassword"
            inputRef={register}
            label="Current Password"
            name="currentPassword"
            placeholder="Enter your current password"
          />
          <TextField
            error={errors.newPassword ? true : false}
            helperText={errors.newPassword ? errors.newPassword.message : null}
            id="newPassword"
            inputRef={register}
            label="Password"
            name="newPassword"
            placeholder="Enter your new password"
          />
          <TextField
            error={errors.confirmNewPassword ? true : false}
            helperText={
              errors.confirmNewPassword
                ? errors.confirmNewPassword.message
                : null
            }
            id="confirmNewPassword"
            inputRef={register}
            label="Confirm new password"
            name="confirmNewPassword"
            placeholder="Enter your new password to confirm"
          />
        </CardContent>
      </Card>
      {/* <Card className={classes.card}>
        <CardHeader title="Email" />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
            id="email"
            inputRef={register}
            label="Email"
            name="email"
            placeholder="Enter your email"
          />
        </CardContent>
      </Card> */}
      <Card className={classes.submitCard}>
        <Button
          className={classes.submitButton}
          color="primary"
          variant="contained">
          <input
            className={classes.submitInput}
            type="submit"
            value="Save profile information"
          />
        </Button>
      </Card>
    </form>
  );
};

AccountForm.propTypes = {};

export default AccountForm;
