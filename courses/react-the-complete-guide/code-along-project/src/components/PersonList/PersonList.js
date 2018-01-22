import React, {PureComponent} from 'react';
import Person from './Person/Person';

class PersonList extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[PersonList.js] inside constructor');
  }

  componentWillMount() {
    console.log('[PersonList.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[PersonList.js] inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE PersonList.js] inside componentWillReceiveProps', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE PersonList.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE PersonList.js] inside componentDidUpdate');
  }

  render() {
    console.log('[PersonList.js] inside render');
    return this.props.persons.map((person, i) => {
      return <Person
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(i)}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}

export default PersonList;
