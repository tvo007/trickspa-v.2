import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <footer {...rest} className={clsx(classes.root, className)}>
      <Typography variant="h1">Footer</Typography>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
