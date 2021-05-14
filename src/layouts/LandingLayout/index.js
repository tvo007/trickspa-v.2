import React, {useState} from 'react';
import {useMediaQuery} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Header} from '../../layout-components';
import {makeStyles, useTheme} from '@material-ui/styles';

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

const LandingLayout = ({children}) => {
  const drawerWidth = 240;
  //theme spacing via 8px scaling factor as per mui api docs, theme.spacing(7) + 1 = 7+8px + 1 px

  const [openMini, setOpenMini] = useState (false);

  const handleMiniOpen = () => {
    setOpenMini (true);
  };

  const handleMiniClose = () => {
    setOpenMini (false);
  };

  const classes = useStyles (openMini, drawerWidth);
  const theme = useTheme ();

  const isDesktop = useMediaQuery (theme.breakpoints.up ('md'), {
    defaultMatches: true,
  });

  // const [openSidebar, setOpenSidebar] = useState (false);

  // const handleSidebarOpen = () => {
  //   setOpenMini (true);
  //   setOpenSidebar (true);
  // };

  // const handleSidebarClose = () => {
  //   setOpenSidebar (false);
  // };

  // const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <Grid
      alignItems="center"
      container
      justify="center"
      style={{height: '100%'}}
    >
      <Header
        drawerWidth={drawerWidth}
        handleMiniClose={handleMiniClose}
        handleMiniOpen={handleMiniOpen}
        isDesktop={isDesktop}
        openMini={openMini}
      />
      {children}
    </Grid>
  );
};

export default LandingLayout;
