import React, {Component} from 'react';
import ValidationComponent from './Validation/Validation';
import CharComponent from './Char/Char';
import './App.css';


class App extends Component {
  state = {
    inputText: '',
  };

  inputChangedHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };

  deleteLetterHandler = (i) => {
    let inputText = this.state.inputText.split('');
    inputText.splice(i, 1);
    inputText = inputText.join('');
    this.setState({ inputText });
  };

  render() {
    const inputText = this.state.inputText;
    const charComponentList = inputText
      .split('')
      .map((letter, i) => {
        return (
          <CharComponent
            letter={letter}
            click={() => this.deleteLetterHandler(i)}
            key={i}/>
        )
      });

    return (
      <div>
        <input
          onChange={this.inputChangedHandler}
          value={this.state.inputText}/>
        <p>{this.state.inputText}</p>
        <ValidationComponent length={this.state.inputText.length}/>
        {charComponentList}
      </div>
    );
  }
}

export default App;
