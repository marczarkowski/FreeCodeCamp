import { DELETE_RESULT, STORE_RESULT } from "./actionTypes";

export const saveResult = resultVal => {
  return {
    type: STORE_RESULT,
    resultVal
  };
};

export const storeResult = resultVal => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(saveResult(resultVal));
    }, 2000);
  };
};

export const deleteResult = resultId => {
  return {
    type: DELETE_RESULT,
    resultId
  };
};
