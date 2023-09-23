import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import config from '../../config';
import EncryptedStorage from 'react-native-encrypted-storage';
import {getUser, reset} from '../store/reducers/userSlice';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isAlert, setIsAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [checkSession, setCheckSession] = useState(false);

  const hideAlert = () => {
    setIsAlert(false);
  };

  const login = async dataLogin => {
    setIsLoading(true);
    await axios
      .post(config.REACT_APP_LOGIN, {
        email: dataLogin?.email,
        password: dataLogin?.password,
      })
      .then(async ({data}) => {
        const userData = {
          _u: data?.username,
          _e: data?.email,
        };
        const token = data?.token;

        setUserInfo(userData);
        setUserToken(token);

        await EncryptedStorage.setItem('user_info', JSON.stringify(userData));
        await EncryptedStorage.setItem('user_session', token);

        dispatch(getUser());
        setIsLoading(false);
      })
      .catch(({response}) => {
        setIsLoading(false);
        setIsAlert(true);
        setErrorMsg(response?.data?.message ?? 'Something wrong with App');
      });
  };

  const logout = async () => {
    setIsLoading(true);
    await axios
      .post(config.REACT_APP_LOGOUT)
      .then(async () => {
        setUserToken(null);
        await EncryptedStorage.removeItem('user_info');
        await EncryptedStorage.removeItem('user_session');
        dispatch(reset());
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Error logout');
        console.log(error);
      });
  };

  const isLoggedIn = async () => {
    try {
      setCheckSession(true);
      let userData = await EncryptedStorage.getItem('user_info');
      const userToken = await EncryptedStorage.getItem('user_session');
      userData = JSON.parse(userData);

      if (userData) {
        setUserToken(userToken);
        setUserInfo(userData);
      }

      setCheckSession(false);
    } catch (error) {
      setErrorMsg(`Login error ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        userInfo,
        isAlert,
        hideAlert,
        errorMsg,
        checkSession,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
