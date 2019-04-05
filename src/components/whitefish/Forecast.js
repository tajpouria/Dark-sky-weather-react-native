import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";

import renderIcon from "../renderIcon";

class Forecast extends Component {
  render() {
    const { icon } = this.props.state.data;
    return (
      <View>
        <Text> Forecast </Text>
        <Text>ds</Text>
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
