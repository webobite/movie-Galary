/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Content, Text, Button, Thumbnail} from 'native-base';

export default class MovieButton extends Component {
  render() {
    return (
      <Content
        style={{
          padding: 5,
        }}>
        <Button
          transparent
          style={{
            flexDirection: 'column',
            width: 100,
            height: 200,
            backgroundColor: 'white',
          }}>
          <Thumbnail
            style={{width: '100%', height: '80%', borderRadius: 0}}
            source={{
              uri: 'https://api.androidhive.info/json/movies/baahubali2.jpg',
            }}
          />
          <Content>
            <Text
              style={{
                fontSize: 10,
                alignSelf: 'flex-start',
                fontWeight: 'bold',
              }}>
              Baahubali: The Conclusion
            </Text>
            <Text
              style={{
                fontSize: 9,
                alignSelf: 'flex-start',
                fontWeight: 'bold',
              }}>
              Rs 89
            </Text>
          </Content>
        </Button>
      </Content>
    );
  }
}
