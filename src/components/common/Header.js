/**
 * Redux Example in React Native
 * Header Component
 * Written by Sam Reaves
 * February 18, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

import React from 'react';
import { Text, View } from 'react-native';

/* Create Header Component */
const Header = (props) => {

  const { textStyles, viewStyles } = styles;

  return (
    <View style={viewStyles}>
      <Text style={textStyles}>{ props.title }</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    elevation: 2,
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }
  },
  textStyles: {
    fontSize: 20
  }
};

/* Export Header Component */
export { Header };
