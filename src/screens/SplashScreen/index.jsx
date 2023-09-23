import {StyleSheet, View} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../../values/ScreenSize';
import Logo from '../../assets/logo/logo.svg';
import {color} from '../../values/Color';
import {Text} from 'react-native-paper';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <View
          style={{
            width: screenWidth * 0.15,
            aspectRatio: 121 / 121,
            marginBottom: 7,
          }}>
          <Logo width="100%" height="100%" />
        </View>
        <Text
          style={{
            fontFamily: 'Merriweather-Bold',
            fontSize: 42,
          }}>
          Goods
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: color.primary300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
