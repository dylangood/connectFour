import React from 'react';
import ConnectFourBoard from './ConnectFourBoard.jsx';
import style from '../styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        Hello, World.
        <ConnectFourBoard />
      </div>
    );
  }
}