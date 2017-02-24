/**
 * Redux Example in React Native
 * Library List Item Component
 * Written by Sam Reaves
 * February 23, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

 import React, { Component } from 'react';
 import { Text } from 'react-native';
 import { CardSection } from '../common';

 class LibraryListItem extends Component {

   render() {

     const styles = {
       fontSize: 18,
       paddingLeft: 15
     };

     return (
         <CardSection>
           <Text style={styles}>
             {this.props.library.title}
           </Text>
         </CardSection>
     );
   }
 }

 export default LibraryListItem;
