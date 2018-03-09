import * as actionTypes from "../actions";

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: {
      return {
        ...state,
        results: [...state.results, { value: action.result, id: new Date() }]
      };
    }
    case actionTypes.DELETE_RESULT: {
      const rsltToDltIndx = action.resultId;
      const updatedResults = state.results.filter(
        result => result.id !== rsltToDltIndx
      );
      return {
        ...state,
        results: updatedResults
      };
    }
    default: {
      return state;
    }
  }
};

export default resultReducer;
