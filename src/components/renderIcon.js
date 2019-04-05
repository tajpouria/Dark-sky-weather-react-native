import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    renderIcon() {
      switch (this.props.state.data.icon) {
        case "partly-cloudy-day":
          return "icons8-partly-cloudy-day-96.png";
        default:
          return "icons8-tornado-96.png";
      }
    }
    render() {
      return <ChildComponent renderIcon={this.renderIcon()} {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { state };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
