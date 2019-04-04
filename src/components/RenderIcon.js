import React, { Component } from "react";
import { View, Image } from "react-native";
import { connect } from "react-redux";

class RenderIcon extends Component {
  renderIcon() {
    return "../icons/icons8-cloud-with-rain-96.png";
  }
  render() {
    return (
      <View>
        <Image
          style={{ height: 50, width: 50 }}
          source={require(this.renderIcon())}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(RenderIcon);
