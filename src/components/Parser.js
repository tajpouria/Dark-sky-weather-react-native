import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import Request from "./Request";

class Parser extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Request />
        <Text>{this.props.state.city}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(
  mapStateToProps,
  actions
)(Parser);
