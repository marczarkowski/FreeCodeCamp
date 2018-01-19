import React, {Component} from 'react';
import classes from './App.css';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import PersonList from '../components/PersonList/PersonList';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Marcin', age: 24 },
      { id: '2', name: 'Jędrzej', age: 24 },
      { id: '3', name: 'Michał', age: 25 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !(this.state.showPersons),
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <PersonList
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
