import * as actionTypes from "../actions/actionTypes";
import { mergeObject } from "../mergeObject";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT: {
      return mergeObject(state, { counter: state.counter + 1 });
    }
    case actionTypes.DECREMENT: {
      return mergeObject(state, { counter: state.counter - 1 });
    }
    case actionTypes.ADD: {
      return mergeObject(state, { counter: state.counter + action.val });
    }
    case actionTypes.SUBTRACT: {
      return mergeObject(state, { counter: state.counter - action.val });
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
