import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Snackbar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {clearSnackbar} from '../../actions/alertActions';

const Alert = props => {
  const dispatch = useDispatch ();
  const {successSnackbarMessage, successSnackbarOpen} = useSelector (
    state => state.alert
  );

  function handleClose () {
    dispatch (clearSnackbar ());
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={successSnackbarOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      message={successSnackbarMessage}
      action={
        <Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Fragment>
      }
    />
  );
};

// Alert.propTypes = {};

export default Alert;
