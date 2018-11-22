import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = {};

  componentDidMount() {
      fetch('/api/user')
      .then(res => res.json())
      .then(userInfo => this.setState(userInfo));
  }


  render() {
    return (
      <div>
        {this.state.username ? <h1> Componente 1 : {`Hello ${this.state.username}`}</h1> : <h1>Loading.. please wait!</h1>}
      </div>
    );
  }
}
