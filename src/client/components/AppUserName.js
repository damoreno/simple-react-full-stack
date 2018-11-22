import React, { Component } from 'react';
import './app.css';

export default class AppUserName extends Component {
  state = {};

  componentDidMount() {
      fetch('/api/user/name')
      .then(res => res.json())
      .then(user => this.setState(user));
  }


  render() {
    return (
      <div>
        {this.state.username ? <h2>Componente 2 : {`Hello ${this.state.username}`}</h2> : <h2>Loading.. please wait!</h2>}
      </div>
    );
  }
}
