import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../actions";

class Request extends Component {
  componentWillMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5a72f38ca1adfa304e19c11586d8ca26/35.6892,51.3890"
      )
      .then(res => this.props.city(res.data))
      .catch(err => console.log(err));
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
