import React , {Component} from 'react';
import {View, Text} from 'react-native';

export default class Clock extends Component{
  state = {
    curTime : 'time ...'
  }
   componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }
  render(){
    return(
      <View style={{flexDirection: 'row'}}>
        <Text style={this.props.style}>{this.state.curTime.slice(0,4)}</Text>
         <Text style={this.props.style}>{this.state.curTime.slice(11,19)}</Text>
      </View>
    )
  }
}