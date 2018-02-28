import React from 'react';
import Column from './Column.jsx';

export default class ConnectFourBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'a',
      activeCol: null,
      board: [ [0, 0, 0, 0, 0, 0, 0], 
               [0, 0, 0, 0, 0, 0, 0], 
               [0, 0, 0, 0, 0, 0, 0], 
               [0, 0, 0, 0, 0, 0, 0], 
               [0, 0, 0, 0, 0, 0, 0], 
               [0, 0, 0, 0, 0, 0, 0], ]
    };
    this.dropToken = this.dropToken.bind(this);
  }

  activateCol(col) {
    this.setState({ activeCol: col });
  }

  dropToken() {
    let token = this.state.currentPlayer[0];
    let i = this.state.board.length;
    while (i > 0 && this.state.board[i - 1][this.state.activeCol]) {
      i -= 1;
    }
    if (i) {
      let newBoard = this.state.board.slice();
      newBoard[i - 1][this.state.activeCol] = token;
      let nextPlayer = null;
      switch (this.state.currentPlayer) {
      case 'a':
        nextPlayer = 'b';
        break;
      case 'b':
        nextPlayer = 'c';
        break;
      case 'c':
        nextPlayer = 'a';
        break;
      }
      this.setState({ 
        board: newBoard, 
        currentPlayer: nextPlayer,
      }); 
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