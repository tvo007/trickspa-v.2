import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from 'react-redux';
import {updatePassword} from '../../../../../actions/userActions';
import * as yup from 'yup';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  // Typography,
} from '@material-ui/core';
import useStyles from '../../../FormStyles';
import {
  USER_ACCOUNT_UPDATE_RESET,
} from '../../../../../constants/userConstants';

const schema = yup.object ().shape ({
  email: yup.string (),
  currentPassword: yup.string (),
  newPassword: yup.string (),
  confirmPassword: yup.string (),
});

const PasswordForm = props => {
  const dispatch = useDispatch ();
  const {loading, success} = useSelector (state => state.updateAccount);
  const {register, handleSubmit, errors, reset} = useForm ({
    resolver: yupResolver (schema),
    defaultValues: {
      email: '',
      password: '',
      newPassword: '',
      confirmPassword: '',
      // password: '',
    },
  });

  useEffect (
    () => {
      if (success) {
        dispatch ({type: USER_ACCOUNT_UPDATE_RESET});
        reset ({
          email: '',
          password: '',
          newPassword: '',
          confirmPassword: '',
        });
      }
    },
    [dispatch, success, reset]
  );

  //listener that resets password fields on success

  const submitHandler = data => {
    // console.log(data)
    dispatch (updatePassword (data));
  };
  const classes = useStyles ();
  return (
    <div>
      <form onSubmit={handleSubmit (submitHandler)}>

        <Card className={classes.card}>
          <CardHeader title="Password" />
          <CardContent className={classes.formContent}>
            <TextField
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email.message : null}
              id="email"
              inputRef={register}
              label="Your email"
              name="email"
              placeholder="Enter your current email"
            />
            <TextField
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : null}
              id="password"
              inputRef={register}
              label="Current Password"
              name="password"
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
              error={errors.confirmPassword ? true : false}
              helperText={
                errors.confirmPassword ? errors.confirmPassword.message : null
              }
              id="confirmPassword"
              inputRef={register}
              label="New Password Confirmation"
              name="confirmPassword"
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
