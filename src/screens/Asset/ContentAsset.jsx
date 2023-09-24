import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Divider, Surface, Text, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

import config from '../../../config';
import {color} from '../../values/Color';
import {screenHeight} from '../../values/ScreenSize';
import {ButtonCircle} from '../../components';

const ContentAsset = () => {
  const [loading, setLoading] = useState(true);
  const [querySearch, setQuerySearch] = useState('');
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [dataAsset, setDataAsset] = useState([]);
  const [statusData, setStatusData] = useState(false);

  const getAsset = async () => {
    setLoading(true);
    await axios
      .get(`${config.REACT_APP_GET_ASSET}?page=${page}&search=${keyword}`)
      .then(({data}) => {
        if (data?.results?.length === 0) {
          setLoading(false);
          setStatusData(false);
          return;
        }
        setStatusData(true);
        setPage(page + 1);
        setDataAsset([...dataAsset, ...data?.results]);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getAsset();
  }, [keyword]);

  const onChangeSearch = query => setQuerySearch(query);

  const handleSearch = search => {
    setPage(1);
    setDataAsset([]);
    setKeyword(search);
  };

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
        onSubmitEditing={event => handleSearch(event.nativeEvent.text)}
      />

      <Surface mode="flat" style={styles.listCard}>
        <ScrollView>
          <SafeAreaView>
            <View style={styles.listContainer}>
              {dataAsset?.map((item, key) => (
                <View key={item?.id}>
                  <View style={styles.listContent}>
                    <View style={styles.listTitle}>
                      <Text variant="labelLarge">Asset Name</Text>
                      <Text variant="titleSmall">{item?.name}</Text>
                    </View>
                    <ButtonCircle size={32}>
                      <Icon name="pencil" size={16} color={color.white} />
                    </ButtonCircle>
                  </View>
                  {key !== dataAsset.length - 1 && (
                    <Divider
                      style={{marginVertical: 10, height: 2, opacity: 0.05}}
                    />
                  )}
                </View>
              ))}
            </View>
            <Button
              onPress={getAsset}
              rippleColor={'transparent'}
              disabled={!statusData}
              style={{marginTop: 10}}>
              {loading
                ? 'Loading'
                : statusData
                ? 'Click to Load More'
                : 'Data Not Found'}
            </Button>
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
