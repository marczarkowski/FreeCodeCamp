import * as actionTypes from "./actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PERSON_ADD: {
      return {
        ...state,
        persons: [...state.persons, { ...action.newPerson, id: Date.now() }]
      };
    }
    case actionTypes.PERSON_REMOVE: {
      return {
        ...state,
        persons: state.persons.filter(
          person => person.id !== action.personId
        )
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
