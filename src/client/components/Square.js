import React, { Component } from 'react';
import './app.css';

const square = React.createElement('div', {
  style: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    margin: '10px',
  }
})

const container = React.createElement(
  // The first argument specifies the element's type
  'div',
  // The second argument specifies the element's attributes, or "props"
  { style: { border: '1px solid blue' } },
  // The remaining arguments list the element's children
  square,
  square
)

export default class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width : props.width
    }
  }
  render() {
    container.props.children[0].props.style.width = this.state.width
    return container;
  }
}
