import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import renderIcon from './renderIcon';

class TodayTab extends Component {
  render() {
    const {
      summary,
      icon,
      city,
      temperature,
      apparentTemperatureMin,
      apparentTemperatureMax,
    } = this.props.state.data;
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.cityContainer} />
          <View>
            <View style={styles.iconAndSummaryContainer}>
              <Image style={styles.icon} source={renderIcon(icon)} />
              <Text style={styles.summaryText}>{summary}</Text>
            </View>
            <View style={styles.minMaxContainer}>
              <Text style={styles.minMaxText}>
                <B>⤒</B> {Math.round(apparentTemperatureMax)}°
              </Text>
              <Text style={styles.minMaxText}>
                <B>⤓</B> {Math.round(apparentTemperatureMin)}°
              </Text>
            </View>
            <View style={styles.temperatureContainer}>
              <Text style={styles.temperatureText}>
                {Math.round(temperature)}°
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const B = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>;

const styles = StyleSheet.create({
  background: { height: '100%', width: '100%' },
  container: { flex: 1, justifyContent: 'space-between' },
  cityContainer: { marginTop: 27, alignItems: 'center', marginBottom: -25 },
  minMaxContainer: {
    flexDirection: 'row',
    marginBottom: -30,
  },
  minMaxText: {
    color: 'rgba(240,240,240,0.6)',
    marginLeft: 40,
    fontSize: 20,
  },
  temperatureContainer: {
    marginBottom: -10,
    marginLeft: 5,
  },
  temperatureText: {
    fontSize: 140,
    color: 'rgba(240,240,240,0.6)',
    fontWeight: '10',
    fontFamily: 'sans-serif-light',
    letterSpacing: 1,
  },
  iconAndSummaryContainer: {
    marginLeft: 21,
    flexDirection: 'row',
  },
  summaryText: {
    marginBottom: -40,
    fontSize: 15,
    color: 'rgba(240,240,240,0.5)',
  },
  icon: {
    height: 50,
    width: 50,
    opacity: 0.5,
  },
});

const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(TodayTab);