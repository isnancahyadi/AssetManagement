import React, {createContext} from 'react';
import {Header} from '../components';
import {ScrollView} from 'react-native';

export const DashboardContext = createContext();

export const DashboardProvider = ({children}) => {
  return (
    <ScrollView style={{backgroundColor: '#F9F9F9'}}>
      <Header />
      <DashboardContext.Provider value={''}>
        {children}
      </DashboardContext.Provider>
    </ScrollView>
  );
};
