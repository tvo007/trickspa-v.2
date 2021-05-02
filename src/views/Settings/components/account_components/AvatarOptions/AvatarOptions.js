import React, {useState} from 'react';

import {Grid, Tabs, Tab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import DefaultAvatars from '../DefaultAvatars/DefaultAvatars';
import AvatarURLForm from '../AvatarURLForm/AvatarURLForm';
import AvatarOtherOptions from '../AvatarOtherOptions/AvatarOtherOptions';

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
    backgroundPosition: 'center',
    minHeight: '100%',
    maxHeight: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    objectFit: 'fit',
  },
}));

//todo: useMediaquery to change cell row number and change image size

function TabPanel (props) {
  const {children, value, index} = props;

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

  // const handleChangeIndex = index => {
  //   setValue (index);
  // };

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
        <AvatarURLForm setImagePreview={setImagePreview} />

      </TabPanel>
      <TabPanel value={value} index={2}>
        <AvatarOtherOptions setImagePreview={setImagePreview} />

      </TabPanel>

    </Grid>
  );
};

// AvatarOptions.propTypes = {};

export default AvatarOptions;
