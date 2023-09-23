import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Surface, Text} from 'react-native-paper';
import {BarChart} from 'react-native-gifted-charts';
import axios from 'axios';

import {color} from '../../values/Color';
import {screenHeight} from '../../values/ScreenSize';
import {Bullet} from '../../components';
import config from '../../../config';

const ContentHome = () => {
  const [chartWidth, setChartWidth] = useState(0);

  const [loading, setLoading] = useState(false);
  const [assetByStatus, setAssetByStatus] = useState([]);
  const [chartStatus, setChartStatus] = useState([]);
  const [assetByLocation, setAssetByLocation] = useState([]);
  const [chartLocation, setChartLocation] = useState([]);

  const getAssetByStatus = async () => {
    await axios
      .get(config.REACT_APP_GET_ASSET_BY_STATUS)
      .then(({data}) => {
        setAssetByStatus(data?.results);

        let chart = [];
        data?.results?.map((item, key) => {
          chart.push({value: item?.count, frontColor: legendColorStatus(item)});
          setChartStatus(chart);
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getAssetByLocation = async () => {
    await axios
      .get(config.REACT_APP_GET_ASSET_BY_LOCATION)
      .then(({data}) => {
        setAssetByLocation(data?.results);

        let chart = [];
        data?.results?.map((item, key) => {
          chart.push({
            value: item?.count,
            frontColor: legendColorLocation(item),
          });
          setChartLocation(chart);
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      Promise.all([getAssetByStatus(), getAssetByLocation()])
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    }, 2000);
  }, []);

  const legendColorStatus = item => {
    switch (item?.status?.name) {
      case 'Expired':
        return color.red300;
      case 'Sold':
        return color.teal500;
      case 'Stock':
        return color.orange500;
      default:
        break;
    }
  };

  const legendColorLocation = item => {
    switch (item?.location?.name) {
      case 'Gudang':
        return color.teal500;
      case 'Rak Penjualan':
        return color.orange500;
      default:
        break;
    }
  };

  const statusName = item => {
    switch (item?.status?.name) {
      case 'Expired':
        return 'Expired Asset';
      case 'Sold':
        return 'Asset Sold';
      case 'Stock':
        return 'Asset in Stock';
      default:
        break;
    }
  };

  return (
    // <ScrollView>
    <SafeAreaView
      style={{
        rowGap: 15,
        padding: 15,
        marginBottom: screenHeight * 0.1,
      }}>
      {loading ? (
        <ActivityIndicator
          animating={loading}
          size={'large'}
          color={color.primary800}
        />
      ) : (
        <>
          <Text variant="titleMedium">Status</Text>
          <View style={styles.statusCardContainer}>
            {assetByStatus?.map((item, key) => (
              <Surface
                key={key}
                mode="flat"
                style={[styles.card, styles.cardCount]}>
                <View style={[styles.cardBody, styles.cardBodyCount]}>
                  <Text variant="titleSmall">{statusName(item)}</Text>
                  <Text variant="headlineMedium2">{item?.count}</Text>
                </View>
              </Surface>
            ))}
          </View>

          <View style={styles.chartContainer}>
            <Surface mode="flat" style={[styles.card]}>
              <View
                onLayout={({nativeEvent}) =>
                  setChartWidth(nativeEvent.layout.width)
                }
                style={[styles.cardBody]}>
                <Text variant="titleSmall">Chart</Text>
                <BarChart
                  data={chartStatus}
                  noOfSections={4}
                  spacing={chartWidth / 7}
                  rulesType="solid"
                  xAxisColor={'lightgray'}
                  yAxisColor={'transparent'}
                />
                <View style={styles.legendContainer}>
                  {assetByStatus?.map((item, key) => (
                    <View key={key} style={styles.legend}>
                      <Bullet size={10} color={legendColorStatus(item)} />
                      <Text variant="labelSmall">{item?.status?.name}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </Surface>
          </View>

          <Text variant="titleMedium">Location</Text>
          <View style={styles.statusCardContainer}>
            {assetByLocation?.map((item, key) => (
              <Surface
                key={key}
                mode="flat"
                style={[styles.card, styles.cardCount]}>
                <View style={[styles.cardBody, styles.cardBodyCount]}>
                  <Text variant="titleSmall">{item?.location?.name}</Text>
                  <Text variant="headlineMedium2">{item?.count}</Text>
                </View>
              </Surface>
            ))}
          </View>

          <View style={styles.chartContainer}>
            <Surface mode="flat" style={[styles.card]}>
              <View
                onLayout={({nativeEvent}) =>
                  setChartWidth(nativeEvent.layout.width)
                }
                style={[styles.cardBody]}>
                <Text variant="titleSmall">Chart</Text>
                <BarChart
                  data={chartLocation}
                  noOfSections={4}
                  spacing={chartWidth / 4.5}
                  rulesType="solid"
                  xAxisColor={'lightgray'}
                  yAxisColor={'transparent'}
                />

                <View style={styles.legendContainer}>
                  {assetByLocation?.map((item, key) => (
                    <View key={key} style={styles.legend}>
                      <Bullet size={10} color={legendColorLocation(item)} />
                      <Text variant="labelSmall">{item?.location?.name}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </Surface>
          </View>
        </>
      )}
    </SafeAreaView>
    // </ScrollView>
  );
};

export default ContentHome;

const styles = StyleSheet.create({
  statusCardContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  chartContainer: {
    width: '100%',
  },
  legendContainer: {
    flexDirection: 'row',
    columnGap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 15,
    backgroundColor: color.white,
  },
  cardBody: {
    flexDirection: 'column',
  },
  cardCount: {
    flex: 1,
    height: screenHeight * 0.14,
  },
  cardBodyCount: {
    flex: 1,
    justifyContent: 'space-between',
  },
  legend: {
    flexDirection: 'row',
    columnGap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
