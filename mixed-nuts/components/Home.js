import React, { Component } from "react";
import { View, Text ,ImageBackground,Image, StyleSheet} from "react-native";
import { connect } from "react-redux";

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'

import Clock from './Clock'
import renderIcon from './renderIcon'

class Home extends Component {
  render() {
    const {
      summary,
      icon,
      city,
      temperature,
      apparentTemperatureMin,
      apparentTemperatureMax
    } = this.props.state.data;
    return (
      <ImageBackground source={require('../assets/background/darkclouds.jpg')}  style={styles.background}>
          <View style={styles.cityContainer}>
            <Text style={styles.cityText}>{city}</Text>
            <Clock style={styles.cityText}/>
          </View>
      <ScrollableTabView
        renderTabBar={() => <ScrollableTabBar style={styles.scrollStyle} tabStyle={styles.tabStyle} />}
        tabBarTextStyle={styles.tabBarTextStyle}
        tabBarInactiveTextColor={'rgba(255,255,255,0.2)'}
        tabBarActiveTextColor={'white'}
        tabBarUnderlineStyle={styles.underlineStyle}
        initialPage={0}
      >
      
        <View key={'1'} tabLabel={'Today'}>
        <View style={styles.background}>
               <View style={styles.container}>
          <View style={styles.cityContainer}/> 
          <View>
          <View style={styles.iconAndSummaryContainer}>
          <Image style={styles.icon} source={renderIcon(icon)} />
          <Text style={styles.summaryText}>{summary}</Text>
          </View>
            <View style={styles.minMaxContainer}>
              <Text style={styles.minMaxText}><B>⤒</B> {Math.round(apparentTemperatureMax)}°</Text>
              <Text style={styles.minMaxText}><B>⤓</B> {Math.round(apparentTemperatureMin)}°</Text>
            </View>
            <View style={styles.temperatureContainer}>
              <Text style={styles.temperatureText}>{Math.round(temperature)}°</Text>
            </View>
          </View>
        </View>
        
        </View>
        </View>
        <View key={'2'} tabLabel={'5 Day '}/>
        
    </ScrollableTabView>
    </ImageBackground>
    );
  }
}

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const styles=StyleSheet.create({
  background:{height:"100%", width:"100%"},
  container:{flex:1, justifyContent:'space-between'},
  cityContainer:{ marginTop: 27, alignItems:'center', marginBottom: -25},
  cityText:{ 
    fontSize:18.5,
    color:'rgba(240,240,240,0.7)',
    fontFamily: 'sans-serif-light'
   },
   minMaxContainer:{
     flexDirection : 'row',
     marginBottom : -30
   },
   minMaxText:{
    color:'rgba(240,240,240,0.6)',
    marginLeft: 40,
    fontSize:20
   },
   temperatureContainer:{
     marginBottom: -10,
     marginLeft: 5
   },
   temperatureText:{
    fontSize:140,
    color:'rgba(240,240,240,0.6)',
    fontWeight: "10",
    fontFamily: 'sans-serif-light',
    letterSpacing : 1
   },
   iconAndSummaryContainer:{
     marginLeft: 21,
     flexDirection:'row'
   },
   summaryText:{
    marginBottom: -40,
    fontSize:15,
    color:'rgba(240,240,240,0.5)',
   },
   icon:{
     height:50, 
     width:50,
     opacity:0.5
     },
    scrollStyle: {
      marginTop : 23,
     backgroundColor: 'rgba(0,0,0,0.0)',
    },
    tabBarTextStyle: {
      fontSize: 14,
      fontWeight: 'normal',
    },
    underlineStyle: {
      height: 3,
      backgroundColor: 'white',
      borderRadius: 3,
      width: 15,
    },
})

const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(Home);
