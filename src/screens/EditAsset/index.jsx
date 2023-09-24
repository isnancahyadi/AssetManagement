import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import config from '../../../config';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screenHeight} from '../../values/ScreenSize';
import {Alert, HeaderSimple, Input, SelectOption} from '../../components';
import {Button, Text} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../values/Color';

const EditAsset = () => {
  const {params} = useRoute();
  const navigation = useNavigation();

  const [dataAsset, setDataAsset] = useState(null);

  const [isAlert, setIsAlert] = useState(false);
  const [confirmationAlert, setConfirmationAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState([]);
  const [location, setLocation] = useState([]);

  const {control, handleSubmit, reset} = useForm();

  const getDetailAsset = async () => {
    await axios
      .get(`${config.REACT_APP_ASSET}/${params?.id}`)
      .then(({data}) => {
        setDataAsset(data);
        reset({
          name: data?.name,
          status: data?.status?.id,
          location: data?.location?.id,
        });
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getDetailAsset();
  }, []);

  const getStatus = async () => {
    await axios
      .get(config.REACT_APP_GET_STATUS)
      .then(({data}) => setStatus(data?.results))
      .catch(error => console.log(error));
  };

  const getLocation = async () => {
    await axios
      .get(config.REACT_APP_GET_LOCATION)
      .then(({data}) => setLocation(data?.results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    Promise.all([getStatus(), getLocation()]);
  }, []);

  const hideAlert = () => setIsAlert(false);

  const handleSaveAsset = async data => {
    await axios
      .put(`${config.REACT_APP_ASSET}/${dataAsset?.id}`, {
        name: data?.name,
        status_id: data?.status,
        location_id: data?.location,
      })
      .then(() => {
        setMessage('Data has been updated.');
        setIsAlert(true);
      })
      .catch(error => console.log(error));
  };

  const handleDelete = async () => {
    setConfirmationAlert(false);
    await axios
      .delete(`${config.REACT_APP_ASSET}/${dataAsset?.id}`)
      .then(() => {
        setMessage('Data has been deleted.');
        setIsAlert(true);
      })
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView style={{height: screenHeight}}>
      <HeaderSimple
        title={'Edit Asset'}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text variant="headlineMedium1">Edit this form{'\n'}below</Text>
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
              data={status}
              placeholder="Select status"
              rules={{required: 'This form is required'}}
            />
          </View>
          <View style={styles.fill}>
            <Text variant="labelLarge">Location</Text>
            <SelectOption
              name="location"
              control={control}
              data={location}
              placeholder="Select location"
              rules={{required: 'This form is required'}}
            />
          </View>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            labelStyle={[styles.buttonLabel, {color: color.red300}]}
            style={[
              styles.button,
              {borderColor: color.red300, borderWidth: 1.4},
            ]}
            onPress={() => setConfirmationAlert(true)}>
            Delete
          </Button>
        </View>
        <LinearGradient
          colors={color.primaryGradient}
          style={styles.buttonContainer}>
          <Button
            labelStyle={styles.buttonLabel}
            style={styles.button}
            onPress={handleSubmit(handleSaveAsset)}>
            Save Update
          </Button>
        </LinearGradient>
      </View>
      {isAlert && (
        <Alert
          title={'Success!'}
          message={message}
          type={'success'}
          isAlert={isAlert}
          hideAlert={hideAlert}
          autoHide={true}
          onHide={() => navigation.goBack()}
        />
      )}
      {confirmationAlert && (
        <Alert
          title={'Confirmation'}
          message={'Your action will cause this data permanently deleted'}
          isAlert={confirmationAlert}
          hideAlert={() => setConfirmationAlert(false)}
          showConfirmButton={true}
          showCancelButton={true}
          labelConfirm={'Delete'}
          onConfirm={handleDelete}
        />
      )}
    </SafeAreaView>
  );
};

export default EditAsset;

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
  actionContainer: {
    position: 'absolute',
    flexDirection: 'row',
    columnGap: 20,
    marginHorizontal: 25,
    marginVertical: 20,
    bottom: 0,
    start: 0,
    end: 0,
  },
  buttonLabel: {
    color: color.white,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
    lineHeight: 21.17,
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 5,
  },
  button: {
    height: 41,
    borderRadius: 5,
  },
});
