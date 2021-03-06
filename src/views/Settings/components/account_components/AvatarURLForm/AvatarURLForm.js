import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
import {TextField, Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useStyles from '../../../FormStyles';

//not connected to accountForm,
//is a seperate form

const schema = yup.object ().shape ({
  url: yup.string (),
  // password: yup.string (),
});

const AvatarURLForm = ({setImagePreview}) => {
  const classes = useStyles ();
  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
    defaultValues: {
      url: '',
      // password: '',
    },
  });

  const submitHandler = data => {
    setImagePreview (data.url);
  };
  return (
    <Fragment>
      <TextField
        error={errors.url ? true : false}
        helperText={errors.url ? errors.url.message : null}
        id="url"
        inputRef={register}
        label="Your Avatar Url"
        name="url"
        placeholder="Enter a url to an avatar image."
        fullWidth
      />
      <Button
        className={classes.submitButton}
        color="primary"
        variant="contained"
        onClick={handleSubmit (submitHandler)}
      >
        Preview Image
      </Button>
    </Fragment>
  );
};

// AvatarURLForm.propTypes = {};

export default AvatarURLForm;
