import React from 'react';

import {DashboardProvider} from '../../context/DashboardContext';

import ContentHome from './ContentHome';

const Home = () => {
  return (
    <DashboardProvider>
      <ContentHome />
    </DashboardProvider>
  );
};

export default Home;
