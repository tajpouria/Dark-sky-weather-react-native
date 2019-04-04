import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import RenderIcon from "../RenderIcon";

class Home extends Component {
  render() {
    const {
      city,
      icon,
      temperature,
      apparentTemperatureMin,
      apparentTemperatureMax
    } = this.props.state.data;
    return (
      <View>
        {/*
         TOOD
        1- city just refer exact name 
        2 - time lib  
        3- temperature ron up 
        4- icon should add for min and max tempera
        5- powered by dark cload should be added 
        */}
        <Text>city::{city}</Text>
        <Text>icon::{icon}</Text>
        <Text>tempratue::{temperature}</Text>
        <Text>min temp::{apparentTemperatureMax}</Text>
        <Text>max temp::{apparentTemperatureMin}</Text>
        <RenderIcon />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Home);
