import React, { Component } from "react";
import "./index.css";

export default class extends Component {
  render() {
    if (this.props.Active) {
      if (this.props.Active && this.props.Pulse) {
        return React.createElement("status-indicator", {
          Active: "",
          pulse: "",
        });
      }
      return React.createElement("status-indicator", { active: "" });
    } else if (this.props.Positive) {
      if (this.props.Pulse) {
        return React.createElement("status-indicator", {
          positive: "",
          pulse: "",
        });
      }
      return React.createElement("status-indicator", { positive: "" });
    } else if (this.props.Intermediary) {
      if (this.props.Pulse) {
        return React.createElement("status-indicator", {
          intermediary: "",
          pulse: "",
        });
      }
      return React.createElement("status-indicator", { intermediary: "" });
    } else if (this.props.Negative) {
      if (this.props.Pulse) {
        return React.createElement("status-indicator", {
          negative: "",
          pulse: "",
        });
      }
      return React.createElement("status-indicator", { negative: "" });
    } else {
      return React.createElement("status-indicator", {});
    }
  }
}
