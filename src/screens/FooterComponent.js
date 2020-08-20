/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon} from 'native-base';
export class FooterComponent extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{backgroundColor: '#ff4455'}}>
          <Button active>
            <Icon type="FontAwesome" name="home" />
          </Button>
          <Button>
            <Icon type="FontAwesome" name="camera" />
          </Button>
          <Button>
            <Icon type="FontAwesome" active name="paw" />
          </Button>
          <Button>
            <Icon type="FontAwesome" name="rocket" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default Footer;
