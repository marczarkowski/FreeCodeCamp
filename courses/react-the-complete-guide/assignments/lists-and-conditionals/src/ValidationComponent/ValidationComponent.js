import React from 'react';

const validationComponent = (props) => {
  const message = props.length > 5 ? "Text long enough" : "Text too short";


  return (
    <p>{message}</p>
  )
};

export default validationComponent;
