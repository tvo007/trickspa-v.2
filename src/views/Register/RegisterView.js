import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
} from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import useStyles from './FormStyles';
import {useDispatch, useSelector} from 'react-redux';
import {signup} from '../../actions/userActions';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {showSnackbar} from '../../actions/alertActions';
import * as yup from 'yup';

const schema = yup.object ().shape ({
  username: yup.string ().required ('Please enter a username'),
  email: yup.string ().email ().required ('Please enter your email.'),
  password: yup.string ().required ('Please enter your password.'),
});

const RegisterView = () => {
  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
  });

  const [errorArray, setErrorArray] = useState ();

  const userRegister = useSelector (state => state.userRegister);
  const {error: authError, success} = userRegister; //userInfo loads when successfully registers, authError is backend errors

  const history = useHistory ();
  const dispatch = useDispatch ();

  useEffect (
    () => {
      if (success) {
        dispatch (showSnackbar ('Sign up successful'));
        history.push ('/login');
      } else if (authError) {
        dispatch (showSnackbar ('Something went wrong.'));
        setErrorArray (authError[0].messages);
        // console.log(authError[0].messages)
      }
    },
    [history, success, authError, dispatch]
  );

  const onSubmit = data => {
    dispatch (signup (data));
  };

  // console.log ({...data, section: {id: section.id}, user: {id: 1}});

  const classes = useStyles ();

  return (
    <Grid container item justify="center" lg={8} md={9}>
      <Grid item xs={12}>
        <Paper className={classes.root} elevation={5}>
          <Grid container>
            <Grid
              alignItems="center"
              className={classes.leftSide}
              container
              item
              justify="center"
              sm={6}
              xs={false}
            >
              <Grid item>
                <Typography align="center" variant="h2">
                  TrickSpa
                </Typography>
                <Typography align="center" variant="body1">
                  Connecting trickers around the world.
                </Typography>
              </Grid>
            </Grid>

            <Grid className={classes.rightSide} item sm={6} xs={12}>
              <Typography align="center" variant="h2">
                Create an Account
              </Typography>
              <form
                action="#"
                className={classes.form}
                onSubmit={handleSubmit (onSubmit)}
              >
                <TextField
                  error={Boolean (errors.email)}
                  helperText={errors.email ? errors.email.message : null}
                  inputRef={register}
                  label="Email"
                  name="email"
                  placeholder="Email"
                />
                <TextField
                  error={Boolean (errors.username)}
                  helperText={errors.username ? errors.username.message : null}
                  inputRef={register}
                  label="Username"
                  name="username"
                  placeholder="Username"
                />
                <TextField
                  error={Boolean (errors.password)}
                  helperText={errors.password ? errors.password.message : null}
                  inputRef={register}
                  label="Password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                {/* <Button color="primary" variant="contained">
              <input
                className={classes.submit}
                type="submit"
                value="Create Account"
              />
            </Button> */}
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  type="submit"
                >
                  <Typography color="textSecondary" variant="body2">
                    Sign Up
                  </Typography>
                </Button>
                <Typography>
                  <Link href="#" onClick={e => history.push ('/login')}>
                    Sign In
                  </Link>
                </Typography>
              </form>
              <Grid>
                {errorArray
                  ? errorArray.map ((item, index) => (
                      <Typography key={index}>
                        <ErrorOutlineIcon fontSize="small" /> {item.message}
                      </Typography>
                    ))
                  : null}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

RegisterView.propTypes = {};

export default RegisterView;
