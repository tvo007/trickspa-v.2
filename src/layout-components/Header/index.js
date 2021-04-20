import React, {useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Grid,
} from '@material-ui/core';
import {logout} from '../../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {showSnackbar} from '../../actions/alertActions';
import DesktopIcons from './components/DesktopIcons';
import MobileIcons from './components/MobileIcons';
import Drawer from './components/Drawer';

const useStyles = makeStyles (theme => ({
  root: {
    boxShadow: 'none',
  },
  appBar: {
    backgroundColor: 'white',
    width: `calc(100% - 73px)`,
    // 'calc(100% - 8px)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create (['width', 'margin'], {
      easing: theme.transitions.easing.slow,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth => drawerWidth,
    width: drawerWidth => `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create (['width', 'margin'], {
      easing: theme.transitions.easing.slow,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarMobile: {
    backgroundColor: 'white',
    width: '100%',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginRight: 30,

    //
  },
  signInButton: {
    marginRight: 30,
    marginTop: theme.spacing (1),

    //
  },
  menuButton: {
    marginRight: 30,
  },
  hide: {
    display: 'none',
  },
}));

const Header = props => {
  const {
    className,
    onSidebarOpen,
    drawerWidth,
    openMini,
    handleMiniOpen,
    handleMiniClose,
    isDesktop,
    ...rest
  } = props;

  const dispatch = useDispatch ();
  const history = useHistory ();

  // const {loading, success, message, error} = useSelector (
  //   state => state.userLogin
  // );

  const {success, error} = useSelector (state => state.logout);

  const {loaded: loginSuccess} = useSelector (state => state.userLogin);

  const classes = useStyles (drawerWidth, openMini, isDesktop);

  // const [notifications] = useState([]);

  const logoutHandler = () => {
    // e.preventDefault ();
    dispatch (logout ());
  };

  useEffect (
    () => {
      if (success) {
        dispatch (showSnackbar ('Logout successful!'));
        //trigger rerender on success
      } else if (error) {
        dispatch (showSnackbar ('Something went wrong during logout.'));
      }
    },
    [success, dispatch, error]
  );

  return (
    <div className={classes.root} {...rest}>
      <AppBar
        position="fixed"
        className={clsx (classes.appBar, {
          [classes.appBarShift]: openMini && isDesktop,
          [classes.appBarMobile]: !isDesktop,
        })}
      >

        <Toolbar>
          <div className={classes.flexGrow} />
          <Grid />
          <Grid container direction="row" justify="space-between">
            <Drawer
              openMini={openMini}
              handleMiniClose={handleMiniClose}
              handleMiniOpen={handleMiniOpen}
            />
            <DesktopIcons
              loginSuccess={loginSuccess}
              isDesktop={isDesktop}
              classes={classes}
              logoutHandler={logoutHandler}
              history={history}
            />

            <MobileIcons
              loginSuccess={loginSuccess}
              isDesktop={isDesktop}
              classes={classes}
              logoutHandler={logoutHandler}
              history={history}
              onSidebarOpen={onSidebarOpen}
            />

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default Header;
