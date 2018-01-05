import React from 'react';

const userInput = (props) => {
  const style = {
    border: '5px solid white',
    boxShadow: 'inset 0 0 8px rgba(0,0,0,0.1), 0 0 16px rgba(0,0,0,0.1)',
    padding: '15px',
    background: 'rgba(255,255,255,0.5)',
    margin: '0 0 10px 0',
  };


  return (
    <div>
      <input
        style={style}
        onChange={props.change}
        value={props.value}/>
    </div>
  );
};

export default userInput;
