/**
 * Redux Example in React Native
 * File System Import Helper for Reducers
 * Written by Sam Reaves
 * February 20, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

 import { combineReducers } from 'redux';
 import LibraryReducer from './LibraryReducer/LibraryReducer';
 import SelectionReducer from './SelectionReducer';

 export default combineReducers({
   libraries: LibraryReducer,
   selection: SelectionReducer
 });
