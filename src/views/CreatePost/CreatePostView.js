import React from 'react';
// import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/postActions';
import {showSnackbar} from '../../actions/alertActions';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Grid, Typography, TextField, Button} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import Nav from '../../components/Nav';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  buttonText: {
    color: theme.palette.primary.contrastText,
  },
}));

const schema = yup.object ().shape ({
  title: yup.string ().required ('Please enter a title.'),
  body: yup.string ().required ('Please enter a body.'),
});

const CreatePostView = ({
  createLoading,
  errorCreate,
  successCreate,
  history,
  forumSlug,
  section,
  isSectionLoading,
}) => {
  //useForm VVV
  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
  });

  const dispatch = useDispatch ();

  const submitHandler = data => {
    // e.preventDefault ();
    if (isSectionLoading) {
      dispatch (showSnackbar ('Please try again'));
    } else if (section) {
      dispatch (
        createPost ({...data, section: {id: section.id}, user: {id: 1}})
      );
      dispatch (showSnackbar ('Success'));
    }

    // console.log ({...data, section: {id: section.id}, user: {id: 1}});
  };

  const classes = useStyles ();
  return (
    <Grid container spacing={4}>

      <Grid item xs={12}>
        <PageHeading
          title={
            forumSlug === 'whats-new'
              ? "What's New"
              : forumSlug
                  .replace (/-/g, ' ')
                  .replace (/(^\w{1})|(\s{1}\w{1})/g, match =>
                    match.toUpperCase ()
                  )
          }
        />
        <Nav text="Create a Post" />
      </Grid>

      {
        <Grid item xs={12}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <form onSubmit={handleSubmit (submitHandler)}>
                {/* <input
                  type="text"
                  placeholde="email"
                  name="email"
                  ref={register}
                />
                <input
                  type="password"
                  placeholde="password"
                  name="password"
                  ref={register ({required: 'PASSWORD REQUIRED', minLength: {value: 8, message: "TOO SHORT"}})}
                />
                <input type="submit" />
                {errors.password &&
                  <Typography>{errors.password.message}</Typography>} */}
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      fullWidth
                      name="title"
                      id="title"
                      inputRef={register}
                      variant="outlined"
                      placeholder="Give your post a title"
                      helperText={errors.title ? errors.title.message : null}
                      error={errors.title ? true : false}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      name="body"
                      id="body"
                      inputRef={register}
                      variant="outlined"
                      placeholder="Give your post a body"
                      multiline
                      rows={4}
                      helperText={errors.body ? errors.body.message : null}
                      error={errors.body ? true : false}
                    />
                  </Grid>

                  <Grid item container justify="flex-start" spacing={1}>

                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        type="submit"
                      >
                        <Typography
                          variant="button"
                          className={classes.buttonText}
                        >
                          Create Post <CreateIcon fontSize="small" />
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        onClick={e => history.push (`/forums/${forumSlug}`)}
                      >
                        <Typography
                          variant="button"
                          className={classes.buttonText}
                        >
                          Go Back <CloseIcon fontSize="small" />
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>

                </Grid>

              </form>

            </Grid>

          </Grid>
        </Grid>
      }

    </Grid>
  );
};

// CreatePostView.propTypes = {};

export default CreatePostView;

/**
 * rollback 1
 * import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/postActions';
import {showSnackbar} from '../../actions/alertActions';
import {
  Grid,
  Typography,
  TextField,
  Button,
  // Card,
  // CardHeader,
  // CardContent,
  // Divider,
  // Snackbar,
  // IconButton,
} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import Nav from '../../components/Nav';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  buttonText: {
    color: theme.palette.primary.contrastText,
  },
}));

const CreatePostView = ({
  createLoading,
  errorCreate,
  successCreate,
  history,
  forumSlug,
  section,
  isSectionLoading,
}) => {
  const [title, setTitle] = useState ('');
  const [body, setBody] = useState ('');

  const dispatch = useDispatch ();

  const submitHandler = e => {
    e.preventDefault ();
    if (isSectionLoading) {
      dispatch (showSnackbar ('Please try again'));
    } else if (section) {
      dispatch (
        createPost ({title, body, section: {id: section.id}, user: {id: 1}})
      );
      dispatch (showSnackbar ('Success!'));
      setTitle ('');
      setBody ('');
    }
  };

  const classes = useStyles ();
  return (
    <Grid container spacing={4}>

      <Grid item xs={12}>
        <PageHeading
          title={
            forumSlug === 'whats-new'
              ? "What's New"
              : forumSlug
                  .replace (/-/g, ' ')
                  .replace (/(^\w{1})|(\s{1}\w{1})/g, match =>
                    match.toUpperCase ()
                  )
          }
        />
        <Nav text="Create a Post" />
      </Grid>

      {
        <Grid item xs={12}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <form onSubmit={submitHandler}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      fullWidth
                      name="title"
                      id="title"
                      value={title || ''}
                      variant="outlined"
                      placeholder="Give your post a title"
                      onChange={e => setTitle (e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      name="body"
                      id="body"
                      value={body || ''}
                      variant="outlined"
                      placeholder="Give your post a body"
                      onChange={e => setBody (e.target.value)}
                      required
                    />
                  </Grid>

                  <Grid item container justify="flex-start" spacing={1}>

                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        type="submit"
                      >
                        <Typography
                          variant="button"
                          className={classes.buttonText}
                        >
                          Create Post <CreateIcon fontSize="small" />
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        onClick={e => history.push (`/forums/${forumSlug}`)}
                      >
                        <Typography
                          variant="button"
                          className={classes.buttonText}
                        >
                          Go Back <CloseIcon fontSize="small" />
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>

                </Grid>

              </form>

            </Grid>

          </Grid>
        </Grid>
      }

    </Grid>
  );
};

CreatePostView.propTypes = {};

export default CreatePostView;
 */
