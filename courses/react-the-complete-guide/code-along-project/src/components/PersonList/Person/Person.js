import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import WithClosure from '../../../hoc/WithClosure';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor');
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount');
    this.inputElement.focus();
  }

  render() {
    console.log('[Person.js] inside render');
    return (
      <Fragment>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inputElement) => { this.inputElement = inputElement }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClosure(Person, classes.Person);
