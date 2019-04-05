import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { unix } from "moment";

export default class HourTile extends Component {
  unixTimeConvetor(number) {
    var day = unix(number);
    return day._d.toString();
  }
  renderImage() {
    switch (this.props.icon) {
      case "partly-cloudy-night":
        return "icons8-night-96.png";
      case "cloudy":
        return "icons8-partly-cloudy-day-96.png";
      case "partly-cloudy-day":
        return "icons8-partly-cloudy-day-96.png";
      case "fog":
        return "fog.png";
      default:
        return "icons8-rainbow-96.png";
    }
  }
  render() {
    return (
      <View>
        <Text>{this.props.icon}</Text>
        <Text>{this.unixTimeConvetor(this.props.date).slice(0, 4)}</Text>
        <Image
          style={{ height: 50, width: 50 }}
          source={require(`../../icons/${this.renderImage()}`)}
        />
        <Text>{Math.round(this.props.maxtemprature)}</Text>
        <Text>{Math.round(this.props.mintemprature)}</Text>
      </View>
    );
  }
}
