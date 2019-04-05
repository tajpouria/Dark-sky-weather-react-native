import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentWillMount() {
      let { hourly } = this.props.state.data;
      let hours = [];
      console.log(hourly);
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { state };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
