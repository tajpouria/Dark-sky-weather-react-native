import React, { Component } from "react";
import { View, Text } from "react-native";

import Forecast from "./Forecast";
import WeekDays from "./WeekDays";

export default class WhiteFish extends Component {
  render() {
    // TODO white fish source should change from app.js
    return (
      <View>
        <Text> ........................................... </Text>
        {/* <Forecast /> */}
        <Text>---------------------------------------------------</Text>
        <WeekDays />
      </View>
    );
  }
}
