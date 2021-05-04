import React from 'react';
import {
  GridListTile,
  ButtonBase,
  GridListTileBar,
  GridList,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
// import PropTypes from 'prop-types'

const useStyles = makeStyles (theme => ({
  gridList: {
    '& .MuiGridListTile-root': {
      [theme.breakpoints.down('xs')]: {
        width: '100% !important',
      }
    }
  },
  buttonBase: {
    // position: 'center',
    height: '150px',
    width: '225px',
    opacity: 0.75,
    position: 'relative',
    '&:hover': {
      zIndex: 1,
      opacity: 1,
      transition: theme.transitions.create ('opacity'),
      '& $gridListBar': {
        visibility: 'visible',
      },
    },
  },
  gridListBar: {
    visibility: 'hidden',
    marginBottom: '2rem',
    height: '20%',
    width: 'auto',
  },
  img: {
    minHeight: '100%',
    minWidth: '100%',
    objectFit: 'cover',
  },
}));

const DefaultAvatars = ({defaultAvatars, setImagePreview}) => {
  const classes = useStyles();
  const showAvatars = defaultAvatars.map (avatar => {
    return (
      <GridListTile key={avatar.id} style={{height: 'auto'}}>
        <ButtonBase
          className={classes.buttonBase}
          onClick={() => setImagePreview (avatar.url)}
        >
          <img src={avatar.url} alt="Loading" className={classes.img} />
          <GridListTileBar
            className={classes.gridListBar}
            title={avatar.name}
          />
        </ButtonBase>
      </GridListTile>
    );
    // <ButtonBase focusRipple key={avatar.id}>
    // <img src={avatar.url} alt="Loading" />
    // </ButtonBase>
  });

  return (
    <GridList cellHeight={250} className={classes.gridList}>
      <GridListTile key="Subheader" cols={2} style={{height: 'auto'}} />

      {showAvatars}

    </GridList>
  );
};

// DefaultAvatars.propTypes = {

// }

export default DefaultAvatars;
