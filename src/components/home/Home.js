import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props);
    const { city, icon } = this.props.state.data;
    return (
      <View>
        <Text>city::{city}</Text>
        <Text>icon::{icon}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Home);
