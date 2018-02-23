import React from 'react';
import Column from './Column.jsx';

export default class ConnectFourBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'red',
      board: [ [0, 0, 0, 0, 0, 0, 0], 
               [0, 0, 0, 0, 0, 0, 0], 
               [0, 0, 0, 0, 0, 0, 0], 
               [0, 0, 0, 'r', 0, 0, 0], 
               [0, 0, 'y', 'r', 'y', 0, 0], 
               [0, 0, 'r', 'r', 'y', 'y', 0], ]
    };
  }
  render() {
    let columns = [];
    for (let i = 0; i < this.state.board[0].length; i += 1) {
      let columnData = this.state.board.map( row => row[i] );
      columns.push( <Column key={i} data={columnData} /> );
    }
    return (
      <div id="connect-four-board" >
        <div className="spacer" ></div>
        {columns}
        <div className="spacer" ></div>
      </div>
    );
  }
}