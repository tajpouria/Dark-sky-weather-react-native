import React, { Component } from "react";
import { View } from "react-native";
import Root from "./Root";

import Parser from "./Parser";
import WhiteFish from "./whitefish/WhiteFish";

// temprature and horly and others should change
export default class App extends Component {
  render() {
    return (
      <Root>
        <View>
          <Parser />
          <WhiteFish />
        </View>
      </Root>
    );
  }
}
