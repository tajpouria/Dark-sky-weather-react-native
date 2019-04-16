import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import HourTile from './HourTile';
import DayTile from './DayTile';

class Forecast extends Component {
  renderHours() {
    const array = [0, 1, 2, 3, 4, 5];
    const { hourly } = this.props.state.data;
    return array.map(item => {
      return (
        <HourTile
          icon={hourly[item].icon}
          temprature={hourly[item].temperature}
          date={hourly[item].time}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.forecastContainer}>
        <Text style={styles.forecastText}> Forecast </Text>
        <View style={styles.hourTileContainer}>{this.renderHours()}</View>
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
            />
          )}
          keyExtractor={item => item.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  forecastContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginLeft: 7,
    marginRight: 7,
    marginTop: 10,
    marginBottom: 10,
  },
  forecastText: {
    fontSize: 18,
    color: 'rgba(240,240,240,0.6)',
    marginBottom: 5,
    marginTop: 7,
    marginLeft: 6,
  },
  hourTileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 13,
    marginRight: 13,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.5)',
  },
});

const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(Forecast);
