import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";

class Details extends Component {
  renderImage() {
    switch (this.props.state.data.icon) {
      case "partly-cloudy-night":
        return "icons8-night-96.png";
      case "cloudy":
        return "icons8-partly-cloudy-day-96.png";
      default:
        return "icons8-rainbow-96.png";
    }
  }
  render() {
    return (
      <View>
        <Text>Details</Text>
        <Text>
          Feels Like : {this.props.state.data.hourly[0].apparentTemperature}
        </Text>
        <Text>Hummidy : {this.props.state.data.hourly[0].humidity}%</Text>
        <Text />
        <Image
          style={{ height: 50, width: 50 }}
          source={require(`../../icons/${this.renderImage()}`)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Details);
