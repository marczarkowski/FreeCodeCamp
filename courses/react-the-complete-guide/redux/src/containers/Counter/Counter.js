import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

const ADD_SUBTRACT_VALUE = 5;

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label={`Add ${ADD_SUBTRACT_VALUE}`}
          clicked={this.props.onAddCounter}
        />
        <CounterControl
          label={`Subtract ${ADD_SUBTRACT_VALUE}`}
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map(result => {
            return (
              <li
                onClick={() => this.props.onDeleteResult(result.id)}
                key={result.id}
                style={{
                  display: "inline-block",
                  listStyleType: "none",
                  fontSize: "18px",
                  paddingRight: "5px"
                }}
              >
                {result.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(ADD_SUBTRACT_VALUE)),
    onSubtractCounter: () =>
      dispatch(actionCreators.subtract(ADD_SUBTRACT_VALUE)),
    onStoreResult: resultVal => dispatch(actionCreators.storeResult(resultVal)),
    onDeleteResult: resultId => dispatch(actionCreators.deleteResult(resultId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
