import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';


class App extends Component {
  state = {
    username: 'Jędrzej',
  };

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput username="Marcin"/>
        <UserOutput username={this.state.username}/>
        <UserInput
          change={this.changeUsernameHandler}
          value={this.state.username}/>
      </div>
    );
  }
}

export default App;
