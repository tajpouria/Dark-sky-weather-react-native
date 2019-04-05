import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    renderIcon() {
      switch (this.props.state.data.icon) {
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
