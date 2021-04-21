import React, {useEffect} from 'react';
import AccountForm from './account_components/AccountForm/AccountForm';
import AvatarOptions from './account_components/AvatarOptions/AvatarOptions';
import {useSelector, useDispatch} from 'react-redux';
import {getDefaultAvatars} from '../../../actions/defaultAvatarActions';
import {showSnackbar} from '../../../actions/alertActions';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import useStyles from '../FormStyles';

const schema = yup.object ().shape ({
  username: yup.string (),
  password: yup.string (),
  avatar: yup.string (),
});

const AccountSettings = () => {
  const dispatch = useDispatch ();

  const defaultAvatars = useSelector (state => state.defaultAvatars);
  const {
    loading: defaultAvatarsLoading,
    error: defaultAvatarsError,
    loaded: defaultAvatarsLoaded,
    avatars,
  } = defaultAvatars;

  useEffect (
    () => {
      if (!defaultAvatarsLoaded)
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
      AvatarOptions={<AvatarOptions defaultAvatars={avatars} />}
    />
  );
};

export default AccountSettings;
