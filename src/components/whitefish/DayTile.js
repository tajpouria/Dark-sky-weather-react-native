import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { unix } from "moment";

import renderIcon from "../renderIcon";

class HourTile extends Component {
  unixTimeConvetor(number) {
    var day = unix(number);
    return day._d.toString();
  }
  render() {
    return (
      <View>
        <Text>{this.unixTimeConvetor(this.props.date).slice(0, 4)}</Text>
        <Image style={{ height: 50, width: 50 }} source={this.props.src} />
        <Text>{Math.round(this.props.maxtemprature)}</Text>
        <Text>{Math.round(this.props.mintemprature)}</Text>
      </View>
    );
  }
}

export default renderIcon(HourTile);
