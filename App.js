/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Body,
  Text
} from 'native-base'
import MusicList from './src/MusicList'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>All Music</Text>
          </Body>
        </Header>
        <MusicList />
      </Container>
    );
  }
}
