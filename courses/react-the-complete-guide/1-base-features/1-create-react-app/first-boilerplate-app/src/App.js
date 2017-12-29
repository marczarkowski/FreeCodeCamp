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

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Marcin Konrad', age: 25 },
        { name: 'Jędrzej', age: 24 },
        { name: 'Michał', age: 26 },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm your first React App!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: History</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
