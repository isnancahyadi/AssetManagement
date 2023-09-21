import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {Text, TextInput} from 'react-native-paper';

import {color} from '../../values/Color';

const Input = ({
  control,
  name,
  placeholder,
  iconLeft,
  iconRight,
  rules = {},
  secureTextEntry,
  multiline,
  numberOfLines = 1,
  onPressIn = null,
  keyboardType = 'default',
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View>
          <TextInput
            mode="outlined"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            activeOutlineColor={color.primary800}
            outlineColor={error ? color.red400 : color.primary500}
            outlineStyle={{borderRadius: 5, borderWidth: 1.1}}
            multiline={multiline}
            numberOfLines={numberOfLines}
            left={iconLeft}
            right={iconRight}
            onPressIn={onPressIn}
            style={styles.textInput}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
          />
          {error && (
            <Text
              variant="bodySmall"
              style={{
                color: color.red400,
                alignSelf: 'stretch',
                marginTop: 7,
              }}>
              {error.message || 'Error'}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    height: 42,
    paddingVertical: 5,
    backgroundColor: color.primary300,
  },
});
