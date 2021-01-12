import React, { Component } from "react";
import { render } from "react-dom";

import StatusIndicator from "../../src";

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-status-indicator Demo</h1>
        <StatusIndicator />
        {"   "}
        <StatusIndicator Active />
        {"   "}
        <StatusIndicator Active Pulse />
        {"   "}
        <StatusIndicator Positive />
        {"   "}
        <StatusIndicator Positive Pulse />
        {"  "}
        <StatusIndicator Intermediary />
        {"  "}
        <StatusIndicator Intermediary Pulse />
        {"   "}
        <StatusIndicator Negative />
        {"  "}
        <StatusIndicator Negative Pulse />
        {"   "}
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
