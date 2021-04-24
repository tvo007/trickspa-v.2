import React, {useEffect} from 'react';
import AccountForm from './account_components/AccountForm/AccountForm';
import AvatarOptions from './account_components/AvatarOptions/AvatarOptions';
import AvatarPreview from './account_components/AvatarPreview/AvatarPreview';
import {useSelector, useDispatch} from 'react-redux';
import {getDefaultAvatars} from '../../../actions/defaultAvatarActions';
import {showSnackbar} from '../../../actions/alertActions';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object ().shape ({
  username: yup.string (),
  password: yup.string (),
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

  const defaultAvatars = useSelector (state => state.defaultAvatars);
  const {
    // loading: defaultAvatarsLoading,
    // error: defaultAvatarsError,
    // loaded: defaultAvatarsLoaded,
    avatars,
  } = defaultAvatars;

  useEffect (
    () => {
      try {
        dispatch (getDefaultAvatars ());
      } catch (error) {
        showSnackbar (error);
      }
    },
    [dispatch]
  );

  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
  });

  const submitHandler = data => alert (JSON.stringify (data));

  return (
    <AccountForm
      submitHandler={submitHandler}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
      AvatarPreview={<AvatarPreview userAvatar={userInfo.user.avatar} initialAvatar={`${userProfile.first_name[0]}${userProfile.last_name[0]}`}/>}
      AvatarOptions={<AvatarOptions defaultAvatars={avatars} />}
    />
  );
};

//initialAvatar prop is used to set as default avatar if userInfo avatar is null

export default AccountSettings;
