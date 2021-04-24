import React from 'react';
// import PropTypes from 'prop-types';
import {Typography, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  // root: {
  //   [theme.breakpoints.down('sm')]: {
  //     paddingLeft: '1rem'
  //   }
  // },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    height: '6rem',
    width: '6rem',
    zIndex: '10',
  },
}));

const AvatarPreview = ({userAvatar, initialAvatar}) => {
  const classes = useStyles ();
  return (
    <div>
      {userAvatar
        ? <Typography>Avatar exists</Typography>
        : <Avatar className={classes.avatar}>
            {initialAvatar}
          </Avatar>}
    </div>
  );
};

// AvatarPreview.propTypes = {};

export default AvatarPreview;
