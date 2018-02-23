import React from 'react';
import Column from './Column.jsx';

export default class ConnectFourBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'yellow',
      activeCol: null,
      board: [ [0, 0, 0, 'r', 0, 0, 0], 
               [0, 0, 0, 'r', 0, 0, 0], 
               [0, 0, 0, 'y', 0, 0, 0], 
               [0, 0, 0, 'r', 0, 0, 0], 
               [0, 0, 'y', 'r', 'y', 0, 0], 
               [0, 0, 'r', 'r', 'y', 'y', 0], ]
    };
    this.dropToken = this.dropToken.bind(this);
  }

  activateCol(col) {
    this.setState({ activeCol: col });
  }

  dropToken() {
    let token = this.state.currentPlayer[0];
    let i = this.state.board.length - 1;
    while (i >= 0) {
      i -= 1;
    }
  }

  render() {
    let columns = [];
    for (let i = 0; i < this.state.board[0].length; i += 1) {
      let columnData = this.state.board.map( row => row[i] );
      columns.push( <Column 
                      key={i} 
                      active={this.state.activeCol === i} 
                      data={columnData}
                      handleMouseover={this.activateCol.bind(this, i)}
                      handleClick={this.dropToken}
                    /> );
    }

    return (
      <div id="connect-four-board" >
        {columns}
      </div>
    );
  }
}