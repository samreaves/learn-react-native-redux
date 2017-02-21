/**
 * Redux Example in React Native
 * App Component
 * Written by Sam Reaves
 * February 20, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'redux';
import { createStore } from 'react-redux';
import { Header } from './common';
import { reducers } from '../reducers';


class App extends Component {

  render() {

    const headerText = 'Redux Example';

    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header title={headerText} />
        </View>
      </Provider>
    );
  }
}

export default App;
