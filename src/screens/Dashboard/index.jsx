import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AddAsset, Asset, Home} from '../../screens';
import {color} from '../../values/Color';
import {Button, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    height: 53,
    position: 'absolute',
    bootom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    background: color.white,
  },
};

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name="home-variant"
                  size={24}
                  color={focused ? color.primary800 : color.grey800}
                />
                <Text
                  variant="labelSmall"
                  style={{color: focused ? color.primary800 : color.grey800}}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddAsset"
        component={AddAsset}
        options={{
          tabBarButton: () => {
            return (
              <View style={{top: -25}}>
                <LinearGradient
                  colors={color.primaryGradient}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60 / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Button
                    onPress={() => navigation.navigate('AddAsset')}
                    style={{
                      borderRadius: 60 / 2,
                    }}>
                    <Icon name="plus" size={24} color={color.white} />
                  </Button>
                </LinearGradient>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Asset"
        component={Asset}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name="archive"
                  size={24}
                  color={focused ? color.primary800 : color.grey800}
                />
                <Text
                  variant="labelSmall"
                  style={{color: focused ? color.primary800 : color.grey800}}>
                  Asset
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
