/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
//to be deleted

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  root: {},
}));

//get url and parse through via react routers getLocation/gethistory/useParams
//push history

const Nav = ({text}) => {
  const {forumSlug, postSlug} = useParams ();

  const history = useHistory ();

  const navHandler = route => {
    history.push (route);
  };

  const classes = useStyles ();
  return (
    <Grid container>
      <Button size="small" onClick={() => navHandler ('/forums')}>
        <Typography variant="button">forums</Typography>
      </Button>
      <Typography variant="h2">/</Typography>

      {forumSlug
        ? <Button
            size="small"
            onClick={() => navHandler (`/forums/${forumSlug}`)}
          >
            <Typography variant="button">{forumSlug}</Typography>
          </Button>
        : null}

      {text
        ? <Fragment>
            <Typography variant="h2">/</Typography>
            <Button size="small">
              <Typography variant="button">{text}</Typography>
            </Button>
          </Fragment>
        : null}

      {postSlug
        ? <Fragment>
            <Typography variant="h2">/</Typography>
            <Button
              size="small"
              onClick={() => navHandler (`/forums/${forumSlug}/${postSlug}`)}
            >
              <Typography variant="button">{postSlug}</Typography>
            </Button>
          </Fragment>
        : null}
    </Grid>
  );
};

Nav.propTypes = {};

export default Nav;
