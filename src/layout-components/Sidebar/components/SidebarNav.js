import React, {forwardRef} from 'react';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {
  List,
  ListItem,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: 'white',
    padding: '10px 23px',
    justifyContent: 'flex-start',
    width: '100%',
    textTransform: '1',
    letterSpacing: 0,
    fontWeight: theme.typography.fontWeightMedium,
  },
  icon: {
    color: 'white',
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing (1),
  },
  active: {
    backgroundColor: 'rgba(55,71,79,.4)',
    '&:hover': {
      backgroundColor: 'rgba(55,71,79,.4)',
    },
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: 'white',
    },
  },
}));

const CustomRouterLink = forwardRef ((props, ref) => (
  <div
    ref={ref}
    style={{flexGrow: 1}}
  >
    <NavLink {...props} />
  </div>
));

const SidebarNav = props => {
  const {pages, openMini, className, ...rest} = props;

  const classes = useStyles (openMini);

  return (
    <List
      {...rest}
      className={clsx (classes.root, className)}
    >
      {pages.map (page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <Grid>
              <Grid
                container
                direction="row"
                wrap="nowrap"
              >
                <Grid item>
                  <div className={classes.icon}>{page.icon}</div>
                </Grid>
                <Grid
                  item
                  zeroMinWidth
                >
                  <Typography
                    color="textSecondary"
                    noWrap
                  >
                    {openMini ? page.title : null}
                  </Typography>
                </Grid>
                
              </Grid>

            </Grid>

          </Button>

        </ListItem>
      ))}

    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
};

export default SidebarNav;
