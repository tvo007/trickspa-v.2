import React from 'react';
// import PropTypes from 'prop-types';
import {Avatar} from '@material-ui/core';
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

const AvatarPreview = ({imagePreview}) => {
  const classes = useStyles ();
  return (
    <div>

      <Avatar src={imagePreview} className={classes.avatar} alt="" />

    </div>
  );
};

// imagePreview.propTypes = {};

export default AvatarPreview;
