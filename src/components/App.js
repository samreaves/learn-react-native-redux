/**
 * Redux Example in React Native
 * App Component
 * Written by Sam Reaves
 * February 20, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './common';


class App extends Component {

  render() {

    const headerText = 'Redux Example';

    return (
      <View style={{ flex: 1 }}>
        <Header title={headerText} />
      </View>
    );
  }
}

export default App;
