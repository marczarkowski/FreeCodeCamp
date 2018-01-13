import React, {Component} from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import './App.css';

class App extends Component {
  state = {
    inputText: '',
  }


  render() {
    return (
      <div>
        <input
          onChange={(event) => this.setState({ inputText: event.target.value })}
          value={this.state.inputText}/>
        <p>{this.state.inputText}</p>
        <ValidationComponent length={this.state.inputText.length}/>
      </div>
    );
  }
}

export default App;
