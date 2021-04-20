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

  return (
    <Grid container>
      <Button onClick={() => navHandler ('/forums')}>
        <Typography>forums</Typography>
      </Button>
      <Typography variant="h2">/</Typography>

      {forumSlug
        ? <Button onClick={() => navHandler (`/forums/${forumSlug}`)}>
            <Typography>{forumSlug}</Typography>
          </Button>
        : null}

      {text
        ? <Fragment>
            <Typography variant="h2">/</Typography>
            <Button>
              <Typography>{text}</Typography>
            </Button>
          </Fragment>
        : null}

      {postSlug
        ? <Fragment>
            <Typography variant="h2">/</Typography>
            <Button
              onClick={() => navHandler (`/forums/${forumSlug}/${postSlug}`)}
            >
              <Typography>{postSlug}</Typography>
            </Button>
          </Fragment>
        : null}
    </Grid>
  );
};

Nav.propTypes = {};

export default Nav;
