import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actionTypes from "../store/actions";

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
  render() {

    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdd}/>
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => {
              this.props.onPersonRemove(person.id)
            }}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdd: (name, age) => dispatch({ type: actionTypes.PERSON_ADD, newPerson: {name, age}}),
    onPersonRemove: (personId) => dispatch({ type: actionTypes.PERSON_REMOVE, personId })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
