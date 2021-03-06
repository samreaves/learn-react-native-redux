/**
 * Redux Example in React Native
 * Library List Item Component
 * Written by Sam Reaves
 * February 23, 2017
 * https://github.com/samreaves/learn-react-native-redux
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { CardSection } from '../common';
import * as actions from '../../actions';

class LibraryListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  /* Render expanded description */
  renderDescription() {

    const { library, expanded } = this.props;

    /* If library list item's id is app's current selected library id  */
    if (expanded) {
      return (
        <Text>
          {library.description}
        </Text>
      );
    }
  }

  /* Render entire Library List Item */
  render() {

    const styles = {
      fontSize: 18,
    };

    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles}>
              {title}
            </Text>
            {this.renderDescription()}
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const expanded = state.selectedLibraryID === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(LibraryListItem);
