import React, {useState, useEffect} from 'react';
import OrgsList from './profile_components/Orgs/OrgsList';
import EventsList from './profile_components/Events/EventsList';
import ProfileForm from './profile_components/ProfileForm/ProfileForm';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {showSnackbar} from '../../../actions/alertActions';
import {updateProfile} from '../../../actions/profileActions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {PROFILE_UPDATE_RESET} from '../../../constants/profileConstants';

const schema = yup.object ().shape ({
  name: yup.string (),
  alias: yup.string (),
  location: yup.string (),
  bio: yup.string (),
  youtube: yup.string (),
  facebook: yup.string (),
  instagram: yup.string (),
  twitter: yup.string (),
  tiktok: yup.string (),
  sampler: yup.string (),
});

const ProfileSettings = ({
  userInfo,
  userProfile,
  profileLoaded,
  profileLoading,
  isLoggedIn,
}) => {
  const dispatch = useDispatch ();

  const [mappedOrgs, setMappedOrgs] = useState ([]);

  const [mappedEvents, setMappedEvents] = useState ([]);

  const updateProfileReducer = useSelector (state => state.updateProfile);
  const {
    loading: updateProfileLoading,
    error: updateProfileError,
    success: successUpdate,
  } = updateProfileReducer;

  const {register, handleSubmit, errors, reset} = useForm ({
    resolver: yupResolver (schema),
    defaultValues: {
      name: `${userProfile.first_name} ${userProfile.last_name}` || '',
      avatar: userInfo.user.avatar || '',
      alias: '',
      location: userProfile.location || '',
      bio: userProfile.bio || '',
      youtube: '',
      facebook: '',
      instagram: userProfile.instaUrl || '',
      twitter: userProfile.instaUrl || '',
      tiktok: '',
      sampler: '',
    },
  });

  useEffect (
    () => {
      if (successUpdate) {
        dispatch (showSnackbar ('Update Successful!'));
        dispatch ({type: PROFILE_UPDATE_RESET});
        reset ();
      } else if (updateProfileError) {
        dispatch (showSnackbar ('Update profile error'));
      }
    },
    [dispatch, successUpdate, updateProfileError, reset]
  );

  useEffect (
    () => {
      if (profileLoaded) {
        try {
          const orgsCopy = userProfile.orgs.map (org => org);
          // const eventsCopy = userProfile.event_history.map (event => event);
          setMappedOrgs (orgsCopy);
          // setMappedEvents (eventsCopy);
        } catch (error) {
          showSnackbar (error);
        }
      }
    },
    [profileLoaded, userProfile.orgs]
  );

  useEffect (
    () => {
      if (profileLoaded) {
        try {
          // const orgsCopy = userProfile.orgs.map (org => org);
          const eventsCopy = userProfile.event_history.map (event => event);
          // setMappedOrgs (orgsCopy);
          setMappedEvents (eventsCopy);
        } catch (error) {
          showSnackbar (error);
        }
      }
    },
    [profileLoaded, userProfile.event_history]
  );

  const submitHandler = data => {
    // e.preventDefault ();
    if (!profileLoaded) {
      dispatch (showSnackbar ('Please try again'));
    } else if (profileLoaded) {
      try {
        dispatch (
          updateProfile (userProfile.id, {
            ...data,
            orgs: mappedOrgs,
            event_history: mappedEvents,
          })
        );
      } catch (error) {
        showSnackbar ('Something went wrong updating your profile.');
      }
    }
  };

  return (
    <ProfileForm
      register={register}
      handleSubmit={handleSubmit}
      submitHandler={submitHandler}
      errors={errors}
      OrgsList={
        <OrgsList mappedOrgs={mappedOrgs} setMappedOrgs={setMappedOrgs} />
      }
      EventsList={
        <EventsList
          mappedEvents={mappedEvents}
          setMappedEvents={setMappedEvents}
        />
      }
    />
  );
};

export default ProfileSettings;
