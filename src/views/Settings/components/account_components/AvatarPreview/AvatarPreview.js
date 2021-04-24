import React from 'react';
// import PropTypes from 'prop-types';
import { Avatar} from '@material-ui/core';
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

const AvatarPreview = ({imagePreview, initials}) => {
  const classes = useStyles ();
  return (
    <div>
      {imagePreview
        ? <Avatar src={imagePreview} className={classes.avatar} />
        : <Avatar className={classes.avatar}>
            {initials}
          </Avatar>}

    </div>
  );
};

// imagePreview.propTypes = {};

export default AvatarPreview;
