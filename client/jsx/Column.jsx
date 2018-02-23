import React from 'react';

const Column = (props) => {
  let contents = props.data.map( (item, i) => {
    return ( 
      <div className={'token ' + item} key={i} />
    );
  });
  return (
    <div 
      className={'column' + (props.active ? ' active' : '')}
      onMouseEnter={props.handleMouseover}
      onClick={props.handleClick}
    >
      {contents}
    </div>
  );

};

export default Column;