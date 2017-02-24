/**
 * Redux Example in React Native
 * File System Import Helper for Actions
 * Written by Sam Reaves
 * February 23, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

export const selectLibrary = (libraryID) => {
  return {
    type: 'select_library',
    payload: libraryID
  };
};
