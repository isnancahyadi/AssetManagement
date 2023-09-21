import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

import {screenHeight, screenWidth} from '../../values/ScreenSize';
import {color} from '../../values/Color';
import {Input} from '../../components';
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../values/Regex';

import LoginBanner from '../../assets/banner/login_banner.svg';
import Logo from '../../assets/logo/logo.svg';

const Login = () => {
  const {control, handleSubmit} = useForm();

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => setSecureTextEntry(!secureTextEntry);

  const handleLogin = async data => {};

  return (
    <ScrollView>
      <SafeAreaView style={{width: screenWidth, height: screenHeight}}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              position: 'absolute',
              width: screenWidth,
              aspectRatio: 360 / 326,
            }}>
            <LoginBanner width="100%" height="100%" />
          </View>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <View
              style={{
                width: screenWidth * 0.1,
                aspectRatio: 121 / 121,
                marginBottom: 7,
              }}>
              <Logo width="100%" height="100%" />
            </View>
            <Text
              variant="headlineLarge"
              style={[styles.headline, {marginVertical: 1}]}>
              Welcome back!
            </Text>
            <Text variant="bodyLarger" style={styles.headline}>
              You've been missed,{'\n'}Please sign in your account
            </Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Input
            name="email"
            control={control}
            placeholder="Email"
            iconLeft={
              <TextInput.Icon
                icon="email-outline"
                color={color.grey700}
                style={{marginTop: 0}}
              />
            }
            keyboardType="email-address"
            rules={{
              required: 'This form is required',
              pattern: {value: EMAIL_REGEX, message: 'Invalid email'},
            }}
          />
          <Input
            name="password"
            control={control}
            placeholder="Password"
            iconLeft={
              <TextInput.Icon
                icon="lock-outline"
                color={color.grey700}
                style={{marginTop: 0}}
              />
            }
            iconRight={
              <TextInput.Icon
                icon={secureTextEntry ? 'eye' : 'eye-off'}
                color={color.grey700}
                style={{marginTop: 0}}
                onPress={toggleSecureTextEntry}
                forceTextInputFocus={false}
              />
            }
            secureTextEntry={secureTextEntry}
            rules={{
              required: 'This form is required',
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  'Password must include number, lowercase, upercase, special character (@$%^&), min. 8 character, max. 32 character',
              },
            }}
          />
          <LinearGradient
            colors={color.primaryGradient}
            style={styles.buttonContainer}>
            <Button
              labelStyle={styles.buttonLabel}
              style={styles.button}
              onPress={handleSubmit(handleLogin)}>
              Login
            </Button>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  headline: {
    color: color.white,
    textAlign: 'center',
  },
  formContainer: {
    top: screenHeight / 4,
    gap: 25,
    marginTop: 35,
    paddingHorizontal: 25,
  },
  buttonLabel: {
    color: color.white,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
    lineHeight: 21.17,
  },
  buttonContainer: {
    marginTop: 50,
    borderRadius: 5,
  },
  button: {
    height: 41,
    borderRadius: 5,
  },
});
