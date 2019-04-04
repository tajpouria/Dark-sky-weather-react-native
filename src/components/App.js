import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

export default class App extends Component {
  state = {
    city: ""
  };
  componentWillMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5a72f38ca1adfa304e19c11586d8ca26/35.6892,51.3890"
      )
      .then(res => this.parseData(res.data))
      .catch(error => console.log(error));
  }
  parseData(data) {
    console.log(data);
    this.setState({ city: data.timezone });
  }
  render() {
    return (
      <View>
        <Text>{this.state.city}</Text>
      </View>
    );
  }
}
