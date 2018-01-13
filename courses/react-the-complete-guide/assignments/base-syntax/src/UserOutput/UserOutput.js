import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hej {props.username}!</p>
      <p>Jak się masz :)?</p>
    </div>
  );
};

export default userOutput;
