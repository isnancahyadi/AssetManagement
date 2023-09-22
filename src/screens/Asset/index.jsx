import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DashboardProvider} from '../../context/DashboardContext';
import ContentAsset from './ContentAsset';

const Asset = () => {
  return (
    <DashboardProvider>
      <ContentAsset />
    </DashboardProvider>
  );
};

export default Asset;

const styles = StyleSheet.create({});
