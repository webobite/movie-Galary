/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Body,
  Header,
  Button,
  Icon,
  Left,
  Title,
  Right,
} from 'native-base';

export default class HeaderComponent extends Component {
  render() {
    return (
      <Header style={{backgroundColor: '#7e51ff'}}>
        {/* <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left> */}
        <Body>
          <Title>Shop</Title>
        </Body>
        {/* <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right> */}
      </Header>
    );
  }
}
