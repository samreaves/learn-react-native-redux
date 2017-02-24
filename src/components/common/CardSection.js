/**
 * Redux Example in React Native
 * Card Section Component
 * Written by Sam Reaves
 * February 18, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

import React from 'react';
import { View } from 'react-native';

/* Create Card Section Component */
const CardSection = (props) => {

  const cardSectionStyles = {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5,
    paddingLeft: 15,
    position: 'relative'
  };

  return (
    <View style={cardSectionStyles}>
      {props.children}
    </View>
  );
};

/* Export Card Section Component */
export { CardSection };
