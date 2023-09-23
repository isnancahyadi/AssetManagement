import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from '../context/AuthContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {SplashScreen} from '../screens';

const Router = () => {
  const {userToken, checkSession} = useContext(AuthContext);

  if (checkSession) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
