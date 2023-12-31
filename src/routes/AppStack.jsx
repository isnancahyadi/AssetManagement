import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddAsset, Dashboard, EditAsset} from '../screens';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: '#F9F9F9'},
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="AddAsset" component={AddAsset} />
      <Stack.Screen name="EditAsset" component={EditAsset} />
    </Stack.Navigator>
  );
};

export default AppStack;
