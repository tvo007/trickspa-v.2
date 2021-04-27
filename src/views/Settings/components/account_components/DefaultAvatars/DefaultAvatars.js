import React from 'react';
import {
  GridListTile,
  ButtonBase,
  GridListTileBar,
  GridList,
} from '@material-ui/core';
// import PropTypes from 'prop-types'

const DefaultAvatars = ({defaultAvatars, classes, setImagePreview}) => {
  const showAvatars = defaultAvatars.map (avatar => {
    return (
      <GridListTile key={avatar.id}>
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
    <GridList cellHeight={250}>
      <GridListTile key="Subheader" cols={2} style={{height: 'auto'}} />

      {showAvatars}

    </GridList>
  );
};

// DefaultAvatars.propTypes = {

// }

export default DefaultAvatars;
