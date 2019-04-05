import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import HourTile from "./HourTile";

import hoursData from "./hoursData";

import renderIcon from "../renderIcon";

class Forecast extends Component {
  render() {
    return (
      <View>
        <Text> Forecast </Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => (
            <HourTile
              date={[]}
              src={require(`../../icons/${this.props.renderIcon}`)}
            />
          )}
          keyExtractor={i => {
            return i.toString();
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(renderIcon(hoursData(Forecast)));
