import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.bold);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.red);
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={assignedClasses.join(' ')}>{props.appTitle}</h1>
      <button
        className={btnClass}
        onClick={props.toggle}>Toggle Persons
      </button>
    </div>
  )
};

export default cockpit;
