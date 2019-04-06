import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class Request extends Component {
  componentWillMount() {
    this.props.dataAction();
  }
  render() {
    return <View />;
  }
}

const mapStateToProps =(state)=>{
  return {state};
}

export default connect(
  mapStateToProps,
  actions
)(Request);
