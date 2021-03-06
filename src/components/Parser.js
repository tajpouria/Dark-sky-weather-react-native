import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Request from "./Request";
import Home from "./home/Home";
class Parser extends Component {
  render() {
    return (
      <View>
        <Request />
        <Text>{this.props.state.city}</Text>
        <Home />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Parser);
