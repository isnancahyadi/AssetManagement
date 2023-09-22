import React, {createContext} from 'react';
import {Header} from '../components';
import {ScrollView} from 'react-native';

export const DashboardContext = createContext();

export const DashboardProvider = ({children}) => {
  return (
    <ScrollView>
      <Header />
      <DashboardContext.Provider value={''}>
        {children}
      </DashboardContext.Provider>
    </ScrollView>
  );
};
