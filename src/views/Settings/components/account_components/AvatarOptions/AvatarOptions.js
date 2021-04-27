//to be deleted

import React, {useState} from 'react';
// import PropTypes from 'prop-types';
// import AvatarPreview from '../AvatarPreview/AvatarPreview';
import {
  Grid,
  // IconButton,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Typography,
  ButtonBase,
  Tabs,
  Tab,
} from '@material-ui/core';
// import PhotoSizeSelectActualIcon
//   from '@material-ui/icons/PhotoSizeSelectActual';
import {makeStyles} from '@material-ui/core/styles';
import DefaultAvatars from '../DefaultAvatars/DefaultAvatars';
import AvatarURLForm from '../AvatarURLForm/AvatarURLForm';

const useStyles = makeStyles (theme => ({
  root: {
    height: '60vh',
  },
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

function TabPanel (props) {
  const {children, value, index, ...other} = props;

  return (
    <Grid role="tabpanel" hidden={value !== index} id={index}>
      {value === index && <Grid>{children}</Grid>}
    </Grid>
  );
}

const AvatarOptions = ({defaultAvatars, setImagePreview}) => {
  const [value, setValue] = useState (0);

  const handleChange = (event, newValue) => {
    setValue (newValue);
  };

  const handleChangeIndex = index => {
    setValue (index);
  };

  const classes = useStyles ();

  return (
    <Grid className={classes.root}>
      <Grid>

        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
        >
          <Tab value={0} label="Default Avatars" />
          <Tab value={1} label="Custom URL" />
          <Tab value={2} label="Other Options" />
        </Tabs>

      </Grid>
      <TabPanel value={value} index={0}>
        <DefaultAvatars
          defaultAvatars={defaultAvatars}
          classes={classes}
          setImagePreview={setImagePreview}
        />

      </TabPanel>
      <TabPanel value={value} index={1}>
        <AvatarURLForm />

      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>
          Reset Image
        </Typography>
        <Typography>
          Use Initials
        </Typography>

      </TabPanel>

    </Grid>
  );
};

// AvatarOptions.propTypes = {};

export default AvatarOptions;
