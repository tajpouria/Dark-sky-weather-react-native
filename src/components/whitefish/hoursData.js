import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    constructor() {
      super();
      this.hours = [];
    }
    componentDidUpdate() {
      const { hourly } = this.props.state.data;
      hourly.map(item => this.hours.push(item.time));
      return this.hours;
    }
    render() {
      return <ChildComponent {...this.props} hours={this.hours} />;
    }
  }

  const mapStateToProps = state => {
    return { state };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
