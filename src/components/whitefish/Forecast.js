import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import HourTile from "./HourTile";

class Forecast extends Component {
  renderHours() {
    const array = [0, 1, 2, 3, 4, 5];
    return array.map(item => {
      return (
        <HourTile
          icon={this.props.state.data.hourly[item].icon}
          temprature={this.props.state.data.hourly[item].temperature}
          date={this.props.state.data.hourly[item].time}
        />
      );
    });
  }

  render() {
    return (
      <View>
        <Text> Forecast </Text>
        {/* <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <HourTile
              icon={this.props.state.data.hourly[item].icon}
              temprature={this.props.state.data.hourly[item].temperature}
              date={this.props.state.data.hourly[item].time}
            />
          )}
          keyExtractor={i => {
            return i.toString();
          }}
        /> */}
        <View style={{ flexDirection: "row" }}>{this.renderHours()}</View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(Forecast);
