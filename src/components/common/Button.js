/**
 * Redux Example in React Native
 * Button Component
 * Written by Sam Reaves
 * February 19, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/* Create Button Component
 * Deconstructed {url, text} from props
 */

const Button = ({ text, onPress }) => {

  const styles = {
    buttonStyles: {
      alignSelf: 'stretch',
      backgroundColor: '#FFF',
      borderColor: '#007AFF',
      borderRadius: 5,
      borderWidth: 1,
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
      maxHeight: 42
    },
    textStyles: {
      alignSelf: 'center',
      color: '#000',
      fontSize: 16,
      fontWeight: '600',
      paddingBottom: 10,
      paddingTop: 10
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyles}>
      <Text style={styles.textStyles}>
        { text }
      </Text>
    </TouchableOpacity>
  );
};


/* Export Button Component */
export { Button };
