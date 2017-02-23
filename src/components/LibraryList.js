/**
 * Redux Example in React Native
 * Library List Component
 * Written by Sam Reaves
 * February 22, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

 import React, { Component } from 'react';
 import { View } from 'react-native';
 import { connect } from 'react-redux';
 //import { Card, CardSection } from './common';

 class LibraryList extends Component {
   render() {
     console.log(this.props);
     return (
       <View />
     );
   }
 }

 const mapStateToProps = state => {
   return {
     libraries: state.libraries,
     selection: state.selection
   };
 };

 export default connect(mapStateToProps)(LibraryList);
