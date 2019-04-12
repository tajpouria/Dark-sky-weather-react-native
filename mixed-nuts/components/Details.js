import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    const { hourly } = this.props.state.data;
    return (
      <View style={styles.datailContainer}>
        <View style={styles.datailTextContainer}>
          <Text style={styles.detailText}>Details</Text>
        </View>
        <View style={styles.iconAndDataContainer}>
          <Image
            style={styles.icon}
            source={require('../assets/icons/p-c-n.png')}
          />
          <View style={styles.dataContainer}>
            <View style={styles.feelsLikeTextContainer}>
              <Text style={styles.feelsLikeText}> Feels like </Text>
              <Text style={styles.feelsLikeText}>
                {Math.round(hourly[0].apparentTemperature)}°
              </Text>
            </View>
            <View style={styles.hummidityTextContainer}>
              <Text style={styles.hummidityText}>Hummidy</Text>
              <Text style={styles.hummidityText}>
                {hourly[0].humidity}%
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  datailContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 10,
  },
  icon: {
    height: 85,
    width: 85,
    opacity: 0.6,
    marginLeft: 20,
    marginTop: 10,
  },
  detailText: {
    fontSize: 15,
    color: 'rgba(240,240,240,0.6)',
    marginBottom: 7,
    marginTop: 7,
    marginLeft: 7,
    marginRight: 20,
  },
  datailTextContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
    marginLeft: 8,
    marginRight: 13,
  },
  iconAndDataContainer: {
    flexDirection: 'row',
  },
  dataContainer: {
    marginTop:13,
    marginRight: 13,
    flex: 1,
    marginLeft: 22,
  },
  feelsLikeTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  hummidityTextContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feelsLikeText: {
    fontSize: 14,
    color: 'rgba(240,240,240,0.4)',
    marginTop: 16,
  },
  hummidityText: {
    fontSize: 14,
    color: 'rgba(240,240,240,0.4)',
    marginBottom: 7,
    marginTop: 8,
  },
});

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Details);
