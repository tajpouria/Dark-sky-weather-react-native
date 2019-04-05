import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";

import renderIcon from "../renderIcon";

class Home extends Component {
  render() {
    const {
      city,
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
        <Text>tempratue::{temperature}</Text>
        <Text>min temp::{apparentTemperatureMax}</Text>
        <Text>max temp::{apparentTemperatureMin}</Text>
        <Image
          // TODO
          // style should to cleaner
          // default render icon spinner or sth like that
          // maye RenderIcon comp should  change to hoc

          style={{ height: 50, width: 50 }}
          source={require(`../../icons/${this.props.renderIcon}`)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(renderIcon(Home));
