/**
 * Redux Example in React Native
 * Library List Component
 * Written by Sam Reaves
 * February 22, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

 import React, { Component } from 'react';
 import { ListView } from 'react-native';
 import { connect } from 'react-redux';
 import LibraryListItem from './LibraryListItem';

 class LibraryList extends Component {

   componentWillMount() {
     const ds = new ListView.DataSource({
       rowHasChanged: (r1, r2) => r1 !== r2
     });

     this.dataSource = ds.cloneWithRows(this.props.libraries);
   }

   renderRow(library) {
     /* Return row of Library Component */
     return (
       <LibraryListItem
         library={library}
       />
     );
   }

   render() {
     console.log(this.props);
     return (
       <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
       />
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
