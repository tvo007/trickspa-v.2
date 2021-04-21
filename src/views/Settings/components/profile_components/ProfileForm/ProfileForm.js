import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';

import useStyles from '../../../FormStyles';

const ProfileForm = ({
  register,
  handleSubmit,
  submitHandler,
  errors,
  OrgsList,
  EventsList,
}) => {
  const classes = useStyles ();

  return (
    <form onSubmit={handleSubmit (submitHandler)}>
      <Card className={classes.card}>
        <CardHeader title={<Typography variant="h3">User</Typography>} />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.name ? true : false}
            fullWidth
            helperText={errors.name ? errors.name.message : null}
            id="name"
            inputRef={register}
            label="Name"
            name="name"
            placeholder="Enter your name"
          />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title={<Typography variant="h3">Basics</Typography>} />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.alias ? true : false}
            fullWidth
            helperText={errors.alias ? errors.alias.message : null}
            id="alias"
            inputRef={register}
            label="Tricker Alias"
            name="alias"
            placeholder="Enter the name trickers know you by"
          />
          <TextField
            error={errors.location ? true : false}
            fullWidth
            helperText={errors.location ? errors.location.message : null}
            id="location"
            inputRef={register}
            label="Location"
            name="location"
            placeholder="Enter your location"
          />
          <TextField
            error={errors.bio ? true : false}
            helperText={errors.bio ? errors.bio.message : null}
            id="bio"
            inputRef={register}
            label="Bio"
            name="bio"
            placeholder="Enter your bio"
          />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title={<Typography variant="h3">Socials</Typography>} />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.youtube ? true : false}
            fullWidth
            helperText={errors.youtube ? errors.youtube.message : null}
            id="youtube"
            inputRef={register}
            label="Youtube URL"
            name="youtube"
            placeholder="Enter your YouTube URL"
          />
          <TextField
            error={errors.facebook ? true : false}
            helperText={errors.facebook ? errors.facebook.message : null}
            id="facebook"
            inputRef={register}
            label="Facebook URL"
            name="facebook"
            placeholder="Enter your Facebook URL"
          />
          <TextField
            error={errors.instagram ? true : false}
            helperText={errors.instagram ? errors.instagram.message : null}
            id="instagram"
            inputRef={register}
            label="Instagram URL"
            name="instagram"
            placeholder="Enter your Instagram URL"
          />
          <TextField
            error={errors.twitter ? true : false}
            helperText={errors.twitter ? errors.twitter.message : null}
            id="twitter"
            inputRef={register}
            label="Twitter URL"
            name="twitter"
            placeholder="Enter your twitter URL"
          />
          <TextField
            error={errors.twitter ? true : false}
            helperText={errors.tiktok ? errors.tiktok.message : null}
            id="tiktok"
            inputRef={register}
            label="Tiktok URL"
            name="tiktok"
            placeholder="Enter your tiktok URL"
          />

        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardHeader
          title={<Typography variant="h3">Your Sampler(s)</Typography>}
        />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.sampler ? true : false}
            fullWidth
            helperText={errors.sampler ? errors.sampler.message : null}
            id="sampler"
            inputRef={register}
            label="Sampler URL"
            name="sampler"
            placeholder="Enter a sampler URL for the world to see"
          />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          title={<Typography variant="h3">Orgs and Communities</Typography>}
        />
        <CardContent className={classes.formContent}>
          {OrgsList}
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title={<Typography variant="h3">Past Events</Typography>} />
        <CardContent className={classes.formContent}>
          {EventsList}
        </CardContent>
      </Card>
      <Card className={classes.submitCard}>
        <Button
          className={classes.submitButton}
          color="primary"
          variant="contained"
          type="submit"
        >
          <Typography className={classes.submitInput}>
            Save profile information
          </Typography>
        </Button>
      </Card>
    </form>
  );
};

ProfileForm.propTypes = {};

export default ProfileForm;
