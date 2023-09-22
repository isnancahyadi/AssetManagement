import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Surface, Text} from 'react-native-paper';
import {BarChart} from 'react-native-gifted-charts';

import {color} from '../../values/Color';
import {screenHeight} from '../../values/ScreenSize';
import {Bullet} from '../../components';

const ContentHome = () => {
  const dataStatus = [
    {value: 10, frontColor: color.teal500},
    {value: 3, frontColor: color.orange500},
    {value: 5, frontColor: color.red300},
  ];

  const dataLocation = [
    {value: 8, frontColor: color.teal500},
    {value: 10, frontColor: color.orange500},
  ];

  const [chartWidth, setChartWidth] = useState(0);

  return (
    // <ScrollView>
    <SafeAreaView
      style={{
        rowGap: 15,
        padding: 15,
        marginBottom: screenHeight * 0.1,
      }}>
      <Text variant="titleMedium">Status</Text>
      <View style={styles.statusCardContainer}>
        <Surface mode="flat" style={[styles.card, styles.cardCount]}>
          <View style={[styles.cardBody, styles.cardBodyCount]}>
            <Text variant="titleSmall">Asset Sold</Text>
            <Text variant="headlineMedium2">10</Text>
          </View>
        </Surface>
        <Surface mode="flat" style={[styles.card, styles.cardCount]}>
          <View style={[styles.cardBody, styles.cardBodyCount]}>
            <Text variant="titleSmall">Asset in Stock</Text>
            <Text variant="headlineMedium2">3</Text>
          </View>
        </Surface>
        <Surface mode="flat" style={[styles.card, styles.cardCount]}>
          <View style={[styles.cardBody, styles.cardBodyCount]}>
            <Text variant="titleSmall">Expired Asset</Text>
            <Text variant="headlineMedium2">5</Text>
          </View>
        </Surface>
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
              data={dataStatus}
              noOfSections={4}
              spacing={chartWidth / 7}
              rulesType="solid"
              xAxisColor={'lightgray'}
              yAxisColor={'transparent'}
            />
            <View style={styles.legendContainer}>
              <View style={styles.legend}>
                <Bullet size={10} color={color.teal500} />
                <Text variant="labelSmall">Sold</Text>
              </View>
              <View style={styles.legend}>
                <Bullet size={10} color={color.orange800} />
                <Text variant="labelSmall">Stock</Text>
              </View>
              <View style={styles.legend}>
                <Bullet size={10} color={color.red300} />
                <Text variant="labelSmall">Expired</Text>
              </View>
            </View>
          </View>
        </Surface>
      </View>

      <Text variant="titleMedium">Location</Text>
      <View style={styles.statusCardContainer}>
        <Surface mode="flat" style={[styles.card, styles.cardCount]}>
          <View style={[styles.cardBody, styles.cardBodyCount]}>
            <Text variant="titleSmall">Gudang</Text>
            <Text variant="headlineMedium2">8</Text>
          </View>
        </Surface>
        <Surface mode="flat" style={[styles.card, styles.cardCount]}>
          <View style={[styles.cardBody, styles.cardBodyCount]}>
            <Text variant="titleSmall">Rak Penjualan</Text>
            <Text variant="headlineMedium2">10</Text>
          </View>
        </Surface>
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
              data={dataLocation}
              noOfSections={4}
              spacing={chartWidth / 4.5}
              rulesType="solid"
              xAxisColor={'lightgray'}
              yAxisColor={'transparent'}
            />
            <View style={styles.legendContainer}>
              <View style={styles.legend}>
                <Bullet size={10} color={color.teal500} />
                <Text variant="labelSmall">Gudang</Text>
              </View>
              <View style={styles.legend}>
                <Bullet size={10} color={color.orange800} />
                <Text variant="labelSmall">Rak Penjualan</Text>
              </View>
            </View>
          </View>
        </Surface>
      </View>
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
