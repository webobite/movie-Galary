/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Container, Thumbnail} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';

const formatData = (data: any, numColumns: any) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }
  return data;
};

const numColumns = 3;

const MovieSelectionScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  // useEffect()
  useEffect(() => {
    // setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        'https://api.androidhive.info/json/movies_2017.json',
      );
      const resJson = await res.json();
      setData(resJson);
      setLoading(false);
    };
    fetchData();
    // console.log('Data : : : :', data);
  }, [data]);

  const _onPressModuleButton = (_screenToRender: any) => {
    console.log('Screen to render : : : ', _screenToRender);
  };

  /**
   *
   * @param param0
   */
  const renderItem = ({item, index}: any) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    // console.log("Item Key : : ", item);

    return (
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.gridStyle}
          onPress={() => {
            _onPressModuleButton(item.title);
          }}>
          <Thumbnail
            // scaleX={1.5}
            // scaleY={2.5}
            small
            size={10}
            square
            style={{
              marginBottom: 9,
              width: 101,
              height: 90,
            }}
            source={{
              uri: `${item.image}`,
            }}
          />
          <View
            style={{
              marginTop: 0,
            }}>
            <Text style={styles.itemText}>{item.title}</Text>
            <View
              style={{
                alignContent: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <ScrollView style={{backgroundColor: '#ECEFF1'}}>
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.container}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      </ScrollView>
    </Container>
  );
};

export default MovieSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    // backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    // margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: 'black',
    justifyContent: 'center',
    fontSize: 9,
  },
  priceText: {
    color: 'red',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    marginStart: 50,
    fontSize: 8,
  },
  gridStyle: {
    padding: 8,
    height: Dimensions.get('window').width / numColumns - 5,
    width: Dimensions.get('window').width / numColumns - 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
    // borderWidth : 1
  },
});
