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
  Title
} from 'native-base';
import MusicList from './src/MusicList';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>All Music</Title>
          </Body>
        </Header>
        <MusicList />
      </Container>
    );
  }
}
