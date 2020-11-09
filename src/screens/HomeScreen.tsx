/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, Content, Container} from 'native-base';
import HeaderComponent from './HeaderComponent';
import MovieSelectionScreen from './MovieSelectionScreen';
import {ScrollView} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content style={{backgroundColor: '#eefafa'}}>
          <ScrollView>
            <HeaderComponent />
            <Text style={{fontSize: 20, fontWeight: 'bold', padding: 10}}>
              New Release Films
            </Text>
            <MovieSelectionScreen />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
