import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
} from '@material-ui/core';
import useStyles from '../FormStyles';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../actions/userActions';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object ().shape ({
  email: yup.string ().email ().required ('Please enter your email.'),
  password: yup.string ().required ('Please enter your password.'),
});

const DummySigninForm = ({onClick}) => {
  // const {values, errors, handleChange, handleSubmit} = useForm ({
  //   username: '',
  //   password: '',
  // });
  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
  });

  const userLogin = useSelector (state => state.userLogin);
  const {loaded} = userLogin;

  const history = useHistory ();
  const dispatch = useDispatch ();

  useEffect (
    () => {
      if (loaded) {
        history.push ('/forums');
      }
    },
    [loaded, history]
  );

  // useEffect (
  //   () => {
  //     if () {
  //       dispatch (showSnackbar ('Login successful'));

  //     } else if (error) {
  //       dispatch (showSnackbar ('Something went wrong.'));
  //     }
  //   },
  //   [history, , error, dispatch]
  // );

  const submitHandler = data => {
    // e.preventDefault ();
    // if (isSectionLoading) {
    //   dispatch (showSnackbar ('Please try again'));
    // } else if (section) {
    //   dispatch (
    //     createPost ({...data, section: {id: section.id}, user: {id: 1}})
    //   );
    //   dispatch (showSnackbar ('Success'));
    dispatch (login (data));
  };

  // console.log ({...data, section: {id: section.id}, user: {id: 1}});

  const classes = useStyles ();

  return (
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
            Sign In
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit (submitHandler)}
          >
            <TextField
              error={errors.email ? true : false}
              fullWidth
              helperText={errors.email ? errors.email.message : null}
              id="email"
              inputRef={register}
              name="email"
              placeholder="Enter your email to login"
            />
            <TextField
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : null}
              id="password"
              inputRef={register}
              name="password"
              placeholder="Enter your password"
            />
            <Button color="primary" variant="contained">
              <input className={classes.submit} type="submit" value="Sign In" />
            </Button>
            <Typography>
              <Link href="#" onClick={onClick}>
                Sign Up
              </Link>
            </Typography>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

DummySigninForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DummySigninForm;
