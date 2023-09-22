import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Surface, Text, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {color} from '../../values/Color';
import {screenHeight} from '../../values/ScreenSize';
import {ButtonCircle} from '../../components';

const ContentAsset = () => {
  const [querySearch, setQuerySearch] = useState('');

  const onChangeSearch = query => setQuerySearch(query);

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="titleMedium">List Asset</Text>
      <TextInput
        mode="outlined"
        placeholder="Search asset"
        activeOutlineColor={color.primary800}
        outlineColor={color.primary500}
        outlineStyle={{borderRadius: 5, borderWidth: 1.1}}
        right={
          <TextInput.Icon
            icon="magnify"
            color={color.grey700}
            style={{marginTop: 0}}
          />
        }
        style={styles.textInput}
        value={querySearch}
        onChangeText={text => onChangeSearch(text)}
      />

      <Surface mode="flat" style={styles.listCard}>
        <ScrollView>
          <SafeAreaView>
            <View style={styles.listContainer}>
              <View style={styles.listContent}>
                <View style={styles.listTitle}>
                  <Text variant="labelLarge">Asset Name</Text>
                  <Text variant="titleSmall">Susu Bendera</Text>
                </View>
                <ButtonCircle size={32}>
                  <Icon name="pencil" size={16} color={color.white} />
                </ButtonCircle>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </Surface>
    </SafeAreaView>
  );
};

export default ContentAsset;

const styles = StyleSheet.create({
  container: {
    rowGap: 15,
    padding: 15,
    marginBottom: screenHeight * 0.1,
  },
  textInput: {
    height: 42,
    paddingVertical: 5,
    backgroundColor: color.primary300,
  },
  listCard: {
    height: screenHeight * 0.55,
    backgroundColor: color.white,
    padding: 25,
  },
  listContainer: {
    rowGap: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTitle: {
    flexDirection: 'column',
    rowGap: 5,
  },
});
