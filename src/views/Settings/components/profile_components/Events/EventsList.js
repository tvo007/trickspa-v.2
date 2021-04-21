import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';

import useStyles from '../../../FormStyles';

const schema = yup.object ().shape ({
  event: yup.string (),
});

const EventsList = ({mappedEvents, setMappedEvents}) => {
  const deleteHandler = eventId => {
    setMappedEvents (mappedEvents.filter (event => event.id !== eventId));
  };

  const updateHandler = obj => {
    console.log (mappedEvents);
  };

  const {register, handleSubmit, errors, setValue} = useForm ({
    resolver: yupResolver (schema),
    defaultValues: {
      event: '',
    },
  });

  const displayEvents = mappedEvents
    ? mappedEvents.map (event => {
        return (
          <ListItem key={event.id}>
            <ListItemText primary={<Typography>{event.name}</Typography>} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => deleteHandler (event.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => updateHandler ()}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })
    : null;

  const submitHandler = (data, e) => {
    e.preventDefault ();
    const maxId = mappedEvents.length < 1
      ? 0
      : Math.max.apply (null, mappedEvents.map (event => event.id));
    const newEvents = [...mappedEvents, {id: maxId + 1, name: data.event}];
    setMappedEvents (newEvents);
    setValue ('event', '');
    ///////old^^^
  };

  const classes = useStyles ();

  return (
    <div>
      <Grid className={classes.formContent}>
        <List>
          {displayEvents}
        </List>
      </Grid>

      <TextField
        error={errors.event ? true : false}
        fullWidth
        helperText={errors.event ? errors.event.message : null}
        id="event"
        inputRef={register}
        label="Gathering"
        name="event"
        placeholder="Enter your past gatherings"
      />

      <IconButton onClick={handleSubmit (submitHandler)}>
        <AddBoxIcon />
      </IconButton>
    </div>
  );
};

EventsList.propTypes = {};

export default EventsList;
