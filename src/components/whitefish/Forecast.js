import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import { unix } from "moment";

import renderIcon from "../renderIcon";

class Forecast extends Component {
  unixTimeConvetor(number) {
    var day = unix(number);
    return day._d.toString();
  }
  render() {
    const { icon } = this.props.state.data;
    return (
      <View>
        <Text> Forecast </Text>
        <Text>{this.unixTimeConvetor(1554453000)}</Text>
        <Image
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
export default connect(mapStateToProps)(renderIcon(Forecast));
