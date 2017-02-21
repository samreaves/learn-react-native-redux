/**
 * Redux Example in React Native
 * Spinner Component
 * Written by Sam Reaves
 * February 19, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

import { View, ActivityIndicator } from 'react-native';
import React from 'react';

  const Spinner = ({ size }) => {

    const spinnerStyles = {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    };

    return (
      <View style={spinnerStyles}>
        <ActivityIndicator size={size || 'large'} />
      </View>
     );
 };

 export { Spinner };
