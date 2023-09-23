import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Surface, Text} from 'react-native-paper';
import {HeaderSimple, Input, SelectOption} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../values/Color';
import {screenHeight} from '../../values/ScreenSize';

const statusData = [
  {name: 'Sold', id: 1},
  {name: 'In Stock', id: 2},
  {name: 'Expired', id: 3},
];

const locationData = [
  {name: 'Gudang', id: 1},
  {name: 'Rak Penjualan', id: 2},
];

const AddAsset = () => {
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm();

  const handleSaveAsset = async data => {};

  return (
    <SafeAreaView style={{height: screenHeight}}>
      <HeaderSimple
        title={'Input Asset'}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text variant="headlineMedium1">Fill this form{'\n'}below</Text>
        <View style={styles.fillContainer}>
          <View style={styles.fill}>
            <Text variant="labelLarge">Asset Name</Text>
            <Input
              name="name"
              control={control}
              placeholder="Input name"
              rules={{required: 'This form is required'}}
            />
          </View>
          <View style={styles.fill}>
            <Text variant="labelLarge">Status</Text>
            <SelectOption
              name="status"
              control={control}
              data={statusData}
              placeholder="Select status"
              rules={{required: 'This form is required'}}
            />
          </View>
          <View style={styles.fill}>
            <Text variant="labelLarge">Location</Text>
            <SelectOption
              name="location"
              control={control}
              data={locationData}
              placeholder="Select location"
              rules={{required: 'This form is required'}}
            />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={color.primaryGradient}
        style={styles.buttonContainer}>
        <Button
          labelStyle={styles.buttonLabel}
          style={styles.button}
          onPress={handleSubmit(handleSaveAsset)}>
          Submit
        </Button>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AddAsset;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  fillContainer: {
    flexDirection: 'column',
    rowGap: 20,
    marginVertical: 40,
  },
  fill: {
    flexDirection: 'column',
    rowGap: 8,
  },
  buttonLabel: {
    color: color.white,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
    lineHeight: 21.17,
  },
  buttonContainer: {
    position: 'absolute',
    borderRadius: 5,
    marginHorizontal: 25,
    marginVertical: 20,
    bottom: 0,
    start: 0,
    end: 0,
  },
  button: {
    height: 41,
    borderRadius: 5,
  },
});
