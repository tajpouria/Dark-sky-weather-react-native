import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import HourTile from "./HourTile";

import renderIcon from "../renderIcon";

class Forecast extends Component {
  render() {
    const { icon } = this.props.state.data;
    return (
      <View>
        <Text> Forecast </Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => (
            <HourTile src={require(`../../icons/${this.props.renderIcon}`)} />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(renderIcon(Forecast));
