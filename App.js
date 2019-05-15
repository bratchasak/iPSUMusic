import React, {Component} from 'react';
import {
  Container
} from 'native-base'
import AppNavigator from './src/AppNavigator';

export default class App extends Component {  
  render() {
    return (
      <Container>
        <AppNavigator />
      </Container>
    );
  }
}
