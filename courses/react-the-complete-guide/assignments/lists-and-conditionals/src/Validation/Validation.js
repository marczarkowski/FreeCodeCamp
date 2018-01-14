import React from 'react';

const validation = (props) => {
  const message = props.length > 5 ? "Text long enough" : "Text too short";


  return (
    <p>{message}</p>
  )
};

export default validation;
