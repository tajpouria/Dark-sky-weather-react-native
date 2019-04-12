import React, { Component } from "react";
import { View } from "react-native";

import RNLocation from "react-native-location";

import Root from "./Root";

import Parser from "./Parser";
import WhiteFish from "./whitefish/WhiteFish";

// temprature and horly and others should change
export default class App extends Component {
  componentWillMount() {
    RNLocation.configure({
      distanceFilter: 5.0
    });

    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse"
      }
    }).then(granted => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          locations => {
            console.log(locations);
          }
        );
      }
    });
  }

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
