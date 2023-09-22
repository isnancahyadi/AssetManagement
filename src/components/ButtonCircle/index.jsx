import React from 'react';
import {Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {color} from '../../values/Color';

const ButtonCircle = ({size, onPress, children}) => {
  return (
    <LinearGradient
      colors={color.primaryGradient}
      style={{
        borderRadius: size / 2,
      }}>
      <Pressable
        onPress={onPress}
        style={{
          width: size,
          height: size,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: size / 2,
        }}>
        {children}
      </Pressable>
    </LinearGradient>
  );
};

export default ButtonCircle;
