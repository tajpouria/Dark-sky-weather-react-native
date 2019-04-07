import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { unix } from "moment";

export default class HourTile extends Component {
  unixTimeConvetor(number) {
    var day = unix(number);
    return day._d.toString();
  }
  render() {
    const { icon, date, maxtemprature,mintemprature} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{this.unixTimeConvetor(date).slice(0, 4)}</Text>
        <Image
          style={styles.icon}
          source={require('../assets/icons/p-c-n.png')}
        />
        <Text style={styles.maxText}>{Math.round(maxtemprature)}°</Text>
        <Text style={styles.minText}>{Math.round(mintemprature)}°</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 13,
    marginRight: 13,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.3)',
  },
  date:{
    fontSize: 19,
    color: 'rgba(240,240,240,0.6)',
    marginBottom: 7,
    marginTop: 7,
    marginLeft: 7,
  },
  icon:{
    height: 40,
    width: 40,
    opacity: 0.7,
    marginBottom: 5
  },
  maxText: {
    fontSize: 19,
    color: 'rgba(240,240,240,0.6)',
    marginBottom: 7,
    marginTop: 7,
    marginLeft: 7,
  },
  minText: {
    fontSize: 19,
    color: 'rgba(240,240,240,0.4)',
    marginBottom: 7,
    marginTop: 7,
    marginLeft: 3,
  }
})