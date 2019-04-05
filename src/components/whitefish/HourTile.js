import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { unix } from "moment";

export default class HourTile extends Component {
  unixTimeConvetor(number) {
    var day = unix(number);
    return day._d.toString();
  }
  render() {
    return (
      <View>
        <Text>{this.unixTimeConvetor(this.props.date).slice(16, 21)}</Text>
        <Image style={{ height: 50, width: 50 }} source={this.props.src} />
        <Text>{Math.round(this.props.temprature)}</Text>
      </View>
    );
  }
}
