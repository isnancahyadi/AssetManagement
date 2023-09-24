import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Button, Modal, Portal, Text} from 'react-native-paper';
import {color} from '../../values/Color';
import LinearGradient from 'react-native-linear-gradient';
import {screenWidth} from '../../values/ScreenSize';
import SuccessBadge from '../../assets/banner/badge_success.svg';

const Alert = ({
  isAlert,
  hideAlert,
  title,
  message,
  autoHide,
  onHide,
  type,
  showConfirmButton,
  showCancelButton,
  labelConfirm,
  onConfirm,
}) => {
  useEffect(() => {
    if (autoHide) {
      setTimeout(() => {
        hideAlert();
        onHide();
      }, 2000);
    }
  }, []);

  return (
    <Portal>
      <Modal
        visible={isAlert}
        onDismiss={hideAlert}
        contentContainerStyle={styles.container}>
        <View style={styles.bodyAlert}>
          {type && type === 'success' ? (
            <View
              style={{
                width: screenWidth * 0.3,
                aspectRatio: 108 / 65,
                // marginBottom: 7,
              }}>
              <SuccessBadge width="100%" height="100%" />
            </View>
          ) : (
            type === 'error' && <Text variant="titleSmall">error logo</Text>
          )}
          <Text variant="titleSmall">{title}</Text>
          <Text variant="bodyMedium" style={{textAlign: 'center'}}>
            {message}
          </Text>
          {(showConfirmButton || showCancelButton) && (
            <View style={styles.actionContainer}>
              {showCancelButton && (
                <View style={styles.buttonContainer}>
                  <Button
                    mode="outlined"
                    labelStyle={[styles.buttonLabel, {color: color.red300}]}
                    onPress={hideAlert}
                    style={[
                      styles.button,
                      {borderColor: color.red300, borderWidth: 1.4},
                    ]}>
                    Cancel
                  </Button>
                </View>
              )}
              {showConfirmButton && (
                <LinearGradient
                  colors={color.primaryGradient}
                  style={styles.buttonContainer}>
                  <Button
                    labelStyle={styles.buttonLabel}
                    style={styles.button}
                    onPress={onConfirm}>
                    {labelConfirm}
                  </Button>
                </LinearGradient>
              )}
            </View>
          )}
        </View>
      </Modal>
    </Portal>
  );
};

export default Alert;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    padding: 20,
    marginHorizontal: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyAlert: {
    width: '100%',
    flexDirection: 'column',
    rowGap: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    columnGap: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 41,
    borderRadius: 5,
  },
});
