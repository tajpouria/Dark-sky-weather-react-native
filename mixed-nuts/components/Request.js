import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import CurrentPosition from './CurrentPosition';

class Request extends Component {
  componentWillMount() {
    return this.props.dataAction();
  }
  componentWillUpdate() {
    const { location } = this.props;
    if (
      location !== undefined &&
      location !== null &&
      location !== 'Waiting..'
    ) {
      return this.props.dataAction(this.props.location);
    }
  }
  render() {
    return <View />;
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(
  mapStateToProps,
  actions
)(Request);
