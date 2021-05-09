import React, {Component} from 'react';
import {Text, View, YellowBox} from 'react-native';
import StackRoute from './src/navigation/StackRoute';
console.disableYellowBox = true;
import {Provider} from 'react-redux';

import store from './src/store/index';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackRoute />
      </Provider>
    );
  }
}

export default App;
