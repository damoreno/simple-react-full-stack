import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppUserName from './components/AppUserName';
import Square from './components/Square';
import Event from './components/Event';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppUserName />, document.getElementById('newElement'));
ReactDOM.render(<Square width={50}/>, document.getElementById('squareElement'));
ReactDOM.render(<Event />, document.getElementById('eventElement'));
