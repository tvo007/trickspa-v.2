import React from 'react';
// import PropTypes from 'prop-types';
// import Skeleton from 'react-loading-skeleton';
import {
  
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  profile: {
    width: '15vw',
  },
  card: {
    maxWidth: '50rem',
    margin: 'auto',
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
  },
  subheader: {
    color: theme.palette.text.subtitle,
  },
  title: {
    fontSize: '1.5rem',
    lineHeight: '1.5',
    fontWeight: '700',
  },
}));

const OriginalPost = ({post, title, body, author, loading}) => {
  const classes = useStyles ();
  const date = new Date(post.published_at);
  const time = date.toString().split(' ').slice(0, 4).join(' ');

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            R
          </Avatar>
        }
        subheader={
          <Typography
            className={classes.subheader}
            variant="body2"
          >
            Posted by {author} @ {time}
          </Typography>
        }
        title={
          <Typography
            className={classes.title}
            component="h2"
          >
            {title}
          </Typography>
        }
      />
      <CardContent>
        {<Typography variant="body1">{body}</Typography>}
      </CardContent>
    </Card>
  );
};

// OriginalPost.propTypes = {};

export default OriginalPost;
