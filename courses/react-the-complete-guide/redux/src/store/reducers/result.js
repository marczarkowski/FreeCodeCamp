import * as actionTypes from "../actions/actionTypes";
import { mergeObject } from "../mergeObject";

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const rsltToDltIndx = action.resultId;
  const updatedResults = state.results.filter(
    result => result.id !== rsltToDltIndx
  );

  return mergeObject(state, { results: updatedResults });
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: {
      return mergeObject(state, {
        results: [state.results, { value: action.resultVal, id: new Date() }]
      });
    }
    case actionTypes.DELETE_RESULT: {
      return deleteResult(state, action);
    }
    default: {
      return state;
    }
  }
};

export default resultReducer;
