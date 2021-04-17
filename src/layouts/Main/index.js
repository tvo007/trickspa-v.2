import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { Sidebar, Header, Footer } from '../../layout-components';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '10%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: openMini => (openMini ? 250 : 90)
    // paddingLeft: 240
  },
  content: {
    display: 'grid',
    '& > *': {
      justifySelf: 'center'
    },
    height: '100%',
    padding: theme.spacing(6),
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1)
    }
    // transition: theme.transitions.create ('width', 'height', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  }
}));

//TODO: rework transition in content section
//^^^ causing material ui errors
//Material-UI: Unrecognized argument(s) [0,1,2,3,4,5]

const Main = props => {
  const { children } = props;

  const drawerWidth = 240;
  //theme spacing via 8px scaling factor as per mui api docs, theme.spacing(7) + 1 = 7+8px + 1 px

  const [openMini, setOpenMini] = useState(false);

  const handleMiniOpen = () => {
    setOpenMini(true);
  };

  const handleMiniClose = () => {
    setOpenMini(false);
  };

  const classes = useStyles(openMini, drawerWidth);
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenMini(true);
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}>
      <Header
        drawerWidth={drawerWidth}
        handleMiniClose={handleMiniClose}
        handleMiniOpen={handleMiniOpen}
        isDesktop={isDesktop}
        onSidebarOpen={handleSidebarOpen}
        openMini={openMini}
      />
      <Sidebar
        drawerWidth={drawerWidth}
        handleMiniClose={handleMiniClose}
        isDesktop={isDesktop}
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        openMini={openMini}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />

      <Grid container justify="center">
        <Grid item lg={9} sm={12} xl={8}>
          <main className={classes.content}>{children}</main>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  // children: PropTypes.node
};

export default Main;