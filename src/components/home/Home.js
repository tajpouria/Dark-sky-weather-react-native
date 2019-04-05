import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";

class Home extends Component {
  renderImage() {
    switch (this.props.state.data.icon) {
      case "partly-cloudy-night":
        return "icons8-night-96.png";
      case "cloudy":
        return "icons8-partly-cloudy-day-96.png";
      default:
        return "icons8-rainbow-96.png";
    }
  }
  render() {
    console.log(this.props);
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
        <Text>tempratue::{Math.round(temperature)}</Text>
        <Text>max temp::{Math.round(apparentTemperatureMax)}</Text>
        <Text>min temp::{Math.round(apparentTemperatureMin)}</Text>
        <Image
          // TODO
          // style should to cleaner
          // default render icon spinner or sth like that
          // maye RenderIcon comp should  change to hoc

          style={{ height: 50, width: 50 }}
          source={require(`../../icons/${this.renderImage()}`)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Home);
