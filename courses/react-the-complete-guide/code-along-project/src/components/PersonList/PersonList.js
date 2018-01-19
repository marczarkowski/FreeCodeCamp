import React from 'react';
import Person from './Person/Person';

const personList = (props) => props.persons.map((person, i) => {
  return <Person
    name={person.name}
    age={person.age}
    click={() => props.clicked(i)}
    key={person.id}
    changed={(event) => props.changed(event, person.id)}/>
});

export default personList;
