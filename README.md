# react-status-indicator

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React-Status-Indicator is a implementation of status indicator in reactjs.

## Usage:

```
import React, from "react";

import StatusIndicator from "@react-status-indicator";

export default function Demo {
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

```

## Output
![image] (https://github.com/muntakim1/react-status-indicator/blob/main/image.png?raw=true)


![alt text](https://github.com/muntakim1/react-status-indicator/blob/main/image.png?raw=true)

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/muntakim1/react-status-indicator
