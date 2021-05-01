import React from 'react';
// import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
  TextField,
  // Typography,
} from '@material-ui/core';
import useStyles from '../../../FormStyles';

const schema = yup.object ().shape ({
  currentPassword: yup.string (),
  newPassword: yup.string (),
  newPasswordConfirm: yup.string (),

  // password: yup.string (),
  avatar: yup.string (),
});

const PasswordForm = props => {
  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      // password: '',
    },
  });
  const classes = useStyles ();

  const submitHandler = data => {
    // console.log (data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit (submitHandler)}>

        <Card className={classes.card}>
          <CardHeader title="Password" />
          <CardContent className={classes.formContent}>
            <TextField
              error={errors.currentPassword ? true : false}
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
              helperText={
                errors.newPassword ? errors.newPassword.message : null
              }
              id="newPassword"
              inputRef={register}
              label="New Password"
              name="newPassword"
              placeholder="Enter your new password"
            />
            <TextField
              error={errors.newPasswordConfirm ? true : false}
              helperText={
                errors.newPasswordConfirm
                  ? errors.newPasswordConfirm.message
                  : null
              }
              id="newPasswordConfirm"
              inputRef={register}
              label="New Password Confirmation"
              name="newPasswordConfirm"
              placeholder="Confirm your new password"
            />
            <Button
              className={classes.submitButton}
              color="primary"
              variant="contained"
              type="submit"
            >
              Update Password
            </Button>
          </CardContent>
        </Card>
      </form>

    </div>
  );
};

// imagePreview.propTypes = {};

export default PasswordForm;
