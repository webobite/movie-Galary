/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Content, Grid, Row, Col, View} from 'native-base';
import MovieButton from './MovieButton';
import {ScrollView} from 'react-native';

export class MovieSelectionScreen extends Component {
  render() {
    return (
      <Content>
        {/* <View style={{flexDirection: 'row'}}>
            <MovieButton />
            <MovieButton />
            <MovieButton />
          </View> */}
        <Grid>
          <Col>
            <MovieButton />
          </Col>
          <Col>
            <MovieButton />
          </Col>
          <Col>
            <MovieButton />
          </Col>
        </Grid>
        <Grid>
          <Col>
            <MovieButton />
          </Col>
          <Col>
            <MovieButton />
          </Col>
          <Col>
            <MovieButton />
          </Col>
        </Grid>
        <Grid>
          <Col>
            <MovieButton />
          </Col>
          <Col>
            <MovieButton />
          </Col>
          <Col>
            <MovieButton />
          </Col>
        </Grid>
      </Content>
    );
  }
}

export default MovieSelectionScreen;
