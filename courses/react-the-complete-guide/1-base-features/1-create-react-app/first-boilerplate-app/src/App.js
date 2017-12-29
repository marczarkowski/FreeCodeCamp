import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm your first React App!</h1>
        <Person name="Marcin Czarkowski" />
      </div>
    );
    // const h1 = React.createElement('h1', null, 'I\'m your first React App!');
    // return React.createElement('div', { className: 'App' }, h1);
  }
}

export default App;
