import React from 'react';
import {View} from 'react-native';

const Bullet = ({color, size}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: size / 2,
      }}
    />
  );
};

export default Bullet;
