import React, { Component } from 'react';
import './app.css';

export default class Event extends Component {

  constructor(props) {
    super(props)
    this.state = {clicked:false}
    this.clickEvent = this.clickEvent.bind(this)
  }

  clickEvent=()=> {
    this.setState({clicked:!this.state.clicked})
  }


  render() {
    const clicked = this.state.clicked
    const buttonElement =  React.createElement('button',
                           {type: 'button', onClick: this.clickEvent},
                           clicked ? 'Boton cliqueado' : 'boton no cliqueado');

    return (
      <div>{buttonElement}</div>
      // <button onClick={this.clickEvent} type='button'>
      //   {clicked ? 'Boton cliqueado' : 'boton no cliqueado'}
      // </button>
      // </div>
    );
  }
}
