/**
 * Redux Example in React Native
 * Selection Reducer
 * Written by Sam Reaves
 * February 23, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;

    default:
      return state;
  }
};
