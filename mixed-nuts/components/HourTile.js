import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { unix } from 'moment';

export default class HourTile extends Component {
  unixTimeConvetor(number) {
    var day = unix(number);
    return day._d.toString();
  }
  render() {
    const { date, temprature } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.dateText}>
          {this.unixTimeConvetor(date).slice(16, 21)}
        </Text>
        <Image
          style={styles.icon}
          source={require('../assets/icons/p-c-n.png')}
        />
        <Text style={styles.tempratureText}>{Math.round(temprature)}°</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItmes: 'center',
  },
  tempratureText: {
    fontSize: 13,
    color: 'rgba(240,240,240,0.6)',
    marginBottom: 10,
  },
  dateText: {
    marginTop: 7,
    fontSize: 13,
    color: 'rgba(240,240,240,0.6)',
  },
  icon: {
    height: 40,
    width: 40,
    opacity: 0.7,
  },
});
