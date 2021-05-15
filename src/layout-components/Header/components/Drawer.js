import React from 'react';
// import PropTypes from 'prop-types';
import {IconButton, Grid, Hidden,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const Drawer = ({openMini, handleMiniClose, handleMiniOpen, loginSuccess, classes, history}) => {
  return (
    <Grid item>
    
   
      <Hidden smDown>
        {!openMini && loginSuccess
          ? <IconButton
              aria-label="open drawer"
              onClick={handleMiniOpen}
              color="default"
            >
              <MenuIcon />
            </IconButton>
          : loginSuccess
              ? <IconButton
                  aria-label="open drawer"
                  onClick={handleMiniClose}
                  color="default"
                >
                  <MenuOpenIcon />
                </IconButton>
              : null}
      </Hidden>
    </Grid>
  );
};

// MobileIcons.propTypes = {};

export default Drawer;
