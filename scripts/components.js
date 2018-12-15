import React, { Component } from 'React'

export class View extends React.Component {
  render() {
    return (
      <div style={{ padding: '5%', textAlign: 'center' }}>{this.props.children}</div>
    )
  }
}
