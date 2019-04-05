import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import renderIcon from "../renderIcon";

import DayTile from "./DayTile";

class WeekDay extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <DayTile
              icon={this.props.state.data.daily[item].icon}
              maxtemprature={
                this.props.state.data.daily[item].apparentTemperatureMax
              }
              mintemprature={
                this.props.state.data.daily[item].apparentTemperatureMin
              }
              date={this.props.state.data.daily[item].time}
              src={require(`../../icons/${this.props.renderIcon}`)}
            />
          )}
          keyExtractor={item => item.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(renderIcon(WeekDay));
