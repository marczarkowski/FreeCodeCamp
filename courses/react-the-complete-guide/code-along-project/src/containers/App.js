import React, {Component, Fragment} from 'react';

import classes from './App.css';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import PersonList from '../components/PersonList/PersonList';
import WithClosure from '../hoc/WithClosure';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: '1', name: 'Marcin', age: 24 },
        { id: '2', name: 'Jędrzej', age: 24 },
        { id: '3', name: 'Michał', age: 25 },
      ],
      showPersons: false,
    };
    console.log('[App.js] inside constructor');
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate');
  }

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
    console.log('[App.js] inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <PersonList
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>;
    }

    return (
      <Fragment>
        <button onClick={() => {
          this.setState({ showPersons: true })
        }}>Show persons
        </button>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler}/>
        {persons}
      </Fragment>
    );
  }
}

export default WithClosure(App, classes.App);
