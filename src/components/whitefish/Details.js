import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";

import renderIcon from "../renderIcon";

class Details extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Details</Text>
        <Text>
          Feels Like : {this.props.state.data.hourly[0].apparentTemperature}
        </Text>
        <Text>Hummidy : {this.props.state.data.hourly[0].humidity}%</Text>
        <Text />
        <Image />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(renderIcon(Details));
