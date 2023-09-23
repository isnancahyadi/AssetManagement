import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {Dropdown} from 'react-native-element-dropdown';
import {color} from '../../values/Color';
import {Text} from 'react-native-paper';

const SelectOption = ({control, name, rules, data, placeholder}) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderItem = item => {
    return (
      <View style={styles.dropdownItem}>
        <Text variant="bodyMedium" style={styles.dropdownTextItem}>
          {item?.name}
        </Text>
      </View>
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <View>
          <Dropdown
            labelField="name"
            valueField="id"
            data={data}
            value={value}
            placeholder={placeholder}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.placeholder}
            containerStyle={{backgroundColor: color.primary300}}
            activeColor={color.primary300}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => onChange(item?.id)}
            renderItem={renderItem}
            style={[
              styles.dropdown,
              isFocus && {borderColor: color.primary800},
              error && {borderColor: color.red400},
            ]}
          />
          {error && (
            <Text variant="bodySmall" style={styles.errorText}>
              {error.message || 'Error'}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default SelectOption;

const styles = StyleSheet.create({
  dropdown: {
    height: 52,
    paddingHorizontal: 13,
    backgroundColor: color.primary300,
    borderColor: color.primary500,
    borderRadius: 5,
    borderWidth: 1.1,
  },
  dropdownItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownTextItem: {
    marginHorizontal: 5,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  placeholder: {
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
  errorText: {
    color: color.red400,
    alignSelf: 'stretch',
    marginTop: 7,
  },
});
