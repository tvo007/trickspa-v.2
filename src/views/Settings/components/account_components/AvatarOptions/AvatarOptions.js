//to be deleted

import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  // Typography,
  // Card,
  // CardHeader,
  // CardContent,
  // CardMedia,
  // Divider,
  // Avatar,
  IconButton,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Typography,
} from '@material-ui/core';
import AccountCircleOutlinedIcon
  from '@material-ui/icons/AccountCircleOutlined';

const AvatarOptions = ({defaultAvatars}) => {
  const showAvatars = defaultAvatars.map (avatar => {
    return (
      <GridListTile key={avatar.id}>
        <img src={avatar.url} alt="Loading" />
        <GridListTileBar
          title={avatar.name}
          actionIcon={
            <IconButton
              style={{color: 'rgba(255, 255, 255, 0.54)'}}
              onClick={() => alert ('Selects current pic to be current avatar')}
            >
              <AccountCircleOutlinedIcon />
            </IconButton>
          }
        />
      </GridListTile>
    );
    // <ButtonBase focusRipple key={avatar.id}>
    // <img src={avatar.url} alt="Loading" />
    // </ButtonBase>
  });

  return (
    <Grid>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
          <ListSubheader component="div">
            <Typography>Avatars</Typography>
          </ListSubheader>
        </GridListTile>

        {showAvatars}

      </GridList>

    </Grid>
  );
};

AvatarOptions.propTypes = {};

export default AvatarOptions;
