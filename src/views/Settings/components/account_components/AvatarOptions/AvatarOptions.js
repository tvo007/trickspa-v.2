//to be deleted

import React from 'react';
import PropTypes from 'prop-types';
import AvatarPreview from '../AvatarPreview/AvatarPreview';
import {
  Grid,
  IconButton,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Typography,
  ButtonBase,
} from '@material-ui/core';
import PhotoSizeSelectActualIcon
  from '@material-ui/icons/PhotoSizeSelectActual';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  buttonBase: {
    // position: 'center',
    [theme.breakpoints.down ('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    height: '100%',
    width: '100%',
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
  },
  img: {
    backgroundPosition: 'center',
    maxHeight: '100%',
  },
}));

//todo: useMediaquery to change cell row number and change image size

const AvatarOptions = ({defaultAvatars}) => {
  const classes = useStyles ();
  const showAvatars = defaultAvatars.map (avatar => {
    return (
      <GridListTile key={avatar.id}>
        <ButtonBase
          className={classes.buttonBase}
          onClick={() =>
            alert (`Clicking this should set the default avatar to avatar.url`)}
        >
          <img src={avatar.url} alt="Loading" className={classes.img} />
          <GridListTileBar
            className={classes.gridListBar}
            title={avatar.name}
            actionIcon={
              <IconButton style={{color: 'rgba(255, 255, 255, 0.54)'}}>
                <PhotoSizeSelectActualIcon />
              </IconButton>
            }
          />
        </ButtonBase>
      </GridListTile>
    );
    // <ButtonBase focusRipple key={avatar.id}>
    // <img src={avatar.url} alt="Loading" />
    // </ButtonBase>
  });

  return (
    <Grid>
      <AvatarPreview />
      <Typography>A button to reset your profile pic</Typography>
      <Typography>A typical form to enter in picture url</Typography>
      <GridList cellHeight={300}>
        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
          <ListSubheader component="div">
            <Typography>Default Avatars</Typography>
          </ListSubheader>
        </GridListTile>

        {showAvatars}

      </GridList>

    </Grid>
  );
};

AvatarOptions.propTypes = {};

export default AvatarOptions;
