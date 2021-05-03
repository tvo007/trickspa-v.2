import React, {useEffect, useState} from 'react';
import AccountForm from './account_components/AccountForm/AccountForm';
import AvatarOptions from './account_components/AvatarOptions/AvatarOptions';
import AvatarPreview from './account_components/AvatarPreview/AvatarPreview';
import {useSelector, useDispatch} from 'react-redux';
import {getDefaultAvatars} from '../../../actions/defaultAvatarActions';
import {showSnackbar} from '../../../actions/alertActions';
import {updateUserAccount} from '../../../actions/userActions';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PasswordForm from './account_components/PasswordForm/PasswordForm';
import {Grid} from '@material-ui/core';

const schema = yup.object ().shape ({
  username: yup.string (),
  // password: yup.string (),
  avatar: yup.string (),
});

const AccountSettings = ({
  userInfo,
  userProfile,
  profileLoaded,
  profileLoading,
  isLoggedIn,
}) => {
  const dispatch = useDispatch ();

  const {avatars, loaded: defaultAvatarsLoaded} = useSelector (
    state => state.defaultAvatars
  );

  const [imagePreview, setImagePreview] = useState ('');

  const [showAvatarURLForm, setShowAvatarURLForm] = useState (false);

  const initials = JSON.parse (
    JSON.stringify (`${userProfile.first_name[0]}${userProfile.last_name[0]}`)
  );

  useEffect (
    () => {
      if (!defaultAvatarsLoaded)
        try {
          dispatch (getDefaultAvatars ());
        } catch (error) {
          showSnackbar (error);
        }
    },
    [dispatch, defaultAvatarsLoaded]
  ); //default avatar loader

  useEffect (() => {
    let mounted = true;
    if (profileLoaded) {
      try {
        let userInfoCopy = {...userInfo.user};
        const avatarCopy = userInfoCopy.avatar !== null &&
          userInfoCopy.avatar !== ''
          ? userInfoCopy.avatar
          : '';
        setImagePreview (avatarCopy);
      } catch (error) {
        showSnackbar (error);
      }
    }
    return function cleanup () {
      mounted = false;
    };
  }, []);

  //init once

  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
    defaultValues: {
      username: userInfo.user.username || '',
      avatar: '',
      // password: '',
    },
  });

  // const submitHandler = data => alert (JSON.stringify (data));

  const submitHandler = data => {
    // e.preventDefault ();
    if (!profileLoaded) {
      dispatch (showSnackbar ('Please try again'));
    } else if (profileLoaded) {
      try {
        dispatch (
          updateUserAccount (userInfo.user.id, {
            ...data,
            avatar: imagePreview,
          })
        );
        // console.log ({...data, avatar: `https://res.cloudinary.com/ddj5orpun/image/upload/v1619048833/moonface_1_o7nn7w.jpg`});
      } catch (error) {
        showSnackbar ('Something went wrong updating your profile.');
      }
    }
  };

  //todo: add tab setting for user to enter a custom url link for an avatar picture

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <AccountForm
          submitHandler={submitHandler}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          showAvatarURLForm={showAvatarURLForm}
          setShowAvatarURLForm={setShowAvatarURLForm}
          AvatarPreview={
            <AvatarPreview imagePreview={imagePreview} initials={initials} />
          }
          AvatarOptions={
            <AvatarOptions
              defaultAvatars={avatars}
              setImagePreview={setImagePreview}
            />
          }
        />
      </Grid>
      <Grid item>
        <PasswordForm />
      </Grid>

    </Grid>
  );
};

//initialAvatar prop is used to set as default avatar if userInfo avatar is null

export default AccountSettings;
