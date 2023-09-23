import {StyleSheet, View, Pressable} from 'react-native';
import React from 'react';
import {Surface, Text} from 'react-native-paper';
import {color} from '../../values/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderSimple = ({onPressBack, title}) => {
  return (
    <Surface mode="flat" style={styles.header}>
      <Pressable onPress={onPressBack} style={styles.backButton}>
        <Surface mode="flat" style={{backgroundColor: 'transparent'}}>
          <Icon name="arrow-left" size={22} color={color.grey800} />
        </Surface>
      </Pressable>
      <Text variant="titleLarge">{title}</Text>
    </Surface>
  );
};

export default HeaderSimple;

const styles = StyleSheet.create({
  header: {
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  backButton: {
    position: 'absolute',
    marginHorizontal: 15,
    left: 0,
  },
});
