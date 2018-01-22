import React from 'react';

import classes from './Cockpit.css';
import Wrapper from '../../hoc/Wrapper';

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.bold);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.red);
  }

  return (
    <Wrapper>
      <h1 className={assignedClasses.join(' ')}>{props.appTitle}</h1>
      <button
        className={btnClass}
        onClick={props.toggle}>Toggle Persons
      </button>
    </Wrapper>
  )
};

export default cockpit;
