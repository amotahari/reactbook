/* @flow */

import React from 'react';

class Wrap extends React.Component<Object> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Wrap
