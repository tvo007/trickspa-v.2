import React from 'react';
// import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {
  Grid,
  // Typography,
  Card,
  CardHeader,
  CardContent,
  // Divider,
  // CardActions,
  // CardActionArea,
  // Avatar,
} from '@material-ui/core';
// import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  profile: {},
  card: {
    maxWidth: '50rem',
    margin: 'auto',
  },
  subheader: {
    // backgroundColor: theme.palette.primary.light,
    height: theme.spacing (1),
  },
  subheaderText: {
    color: theme.palette.text.subtitle,
  },
  // avatarContainer: {
  //   marginLeft: theme.spacing(2)
  // },
  avatar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
}));

const CommentSkeleton = () => {
  const classes = useStyles ();
  return (
    <Grid
      className={classes.card}
      container
      direction="row"
      justify="space-between"
      spacing={1}
    >

      <Grid container item justify="center" xs={1}>
        {<Skeleton circle height={40} width={40} />}
      </Grid>

      <Grid item xs={11}>

        <Card>
          <CardHeader
            className={classes.subheader}
            subheader={<Skeleton width={150} />}
          />

          <CardContent>
            {<Skeleton count={2} />}
          </CardContent>

          {/* <Divider orientation="vertical" flexItem /> */}
          {/* <Grid item xs={1}>

          <CardContent className={classes.profile}>
            <Typography noWrap={true}>PROFILE CONTENT</Typography>
            <Typography noWrap={true}>SHOULD HIDE WHEN MINIMAL</Typography>
          </CardContent>
        </Grid> */}
        </Card>
      </Grid>
    </Grid>
  );
};

// CommentSkeleton.propTypes = {};

export default CommentSkeleton;
