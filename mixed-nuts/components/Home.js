import React, { Component } from 'react';
import { View,Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view-forked';

import Clock from './Clock';
import TodayTab from './TodayTab';
import Forecast from './Forecast';

class Home extends Component {
  render() {
    const { city } = this.props.state.data;
    return (
      <ImageBackground
        source={require('../assets/background/darkclouds.jpg')}
        style={styles.background}>
        <View style={styles.cityContainer}>
          <Text style={styles.cityText}>{city}</Text>
          <Clock style={styles.cityText} />
        </View>
        <ScrollableTabView
          renderTabBar={() => (
            <ScrollableTabBar
              style={styles.scrollStyle}
              tabStyle={styles.tabStyle}
            />
          )}
          tabBarTextStyle={styles.tabBarTextStyle}
          tabBarInactiveTextColor={'rgba(255,255,255,0.2)'}
          tabBarActiveTextColor={'white'}
          tabBarUnderlineStyle={styles.underlineStyle}
          initialPage={0}>
          <View key={'1'} tabLabel={'Today'}>
            <TodayTab />
          </View>
          <View key={'2'} tabLabel={'5 Days '}>
            <Forecast />
          </View>
        </ScrollableTabView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: { height: '100%', width: '100%' },
  cityContainer: { marginTop: 27, alignItems: 'center', marginBottom: -25 },
  cityText: {
    fontSize: 18.5,
    color: 'rgba(240,240,240,0.7)',
    fontFamily: 'sans-serif-light',
  },
  scrollStyle: {
    marginTop: 23,
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 50,
  },
});

const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(Home);
