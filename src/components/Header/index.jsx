import {StyleSheet, View} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../../values/ScreenSize';
import Logo from '../../assets/logo/logo.svg';
import {Avatar, Button, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {color} from '../../values/Color';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 15,
        paddingVertical: 13,
        backgroundColor: color.white,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            columnGap: 10,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: screenWidth * 0.1,
              aspectRatio: 121 / 121,
              marginBottom: 7,
            }}>
            <Logo width="100%" height="100%" />
          </View>
          <Text
            style={{
              fontFamily: 'Merriweather-Bold',
              fontSize: 26,
            }}>
            Goods
          </Text>
        </View>
        <Text variant="labelLarge">TEST QTI</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', columnGap: 10}}>
          <Avatar.Image
            size={50}
            source={require('../../assets/img/picture.jpg')}
          />
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text variant="labelLarge">Isnan Arif</Text>
            <Text variant="labelMedium">isnan.arifc@gmail.com</Text>
          </View>
        </View>
        <LinearGradient
          colors={color.primaryGradient}
          style={styles.buttonContainer}>
          <Button labelStyle={styles.buttonLabel} style={styles.button}>
            Logout
          </Button>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  buttonLabel: {
    color: color.white,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
    lineHeight: 21.17,
  },
  buttonContainer: {
    // paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    height: 41,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
