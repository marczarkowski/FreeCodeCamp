import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Marcin', age: 24 },
      { name: 'Jędrzej', age: 24 },
      { name: 'Michał', age: 25 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Marcin Konrad', age: 25 },
        { name: newName, age: 24 },
        { name: 'Michał', age: 26 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Marcin Konrad', age: 25 },
        { name: event.target.value, age: 24 },
        { name: 'Michał', age: 26 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm your first React App!</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Andrzejos')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Andrzej')}
          changed={this.nameChangedHandler}>Hobbies: History</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
