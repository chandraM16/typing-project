import { RESET, ACCURACY, COUNT, ERROR } from "./constant";

const initialState = {
  error: [0],
  accuracy: [0],
  count: 0,
};

export const typing = (currState = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        error: [0],
        accuracy: [0],
        count: 0,
      };
    case COUNT:
      return {
        ...currState,
        count: currState.count + 1,
      };

    case ACCURACY:
      return {
        ...currState,
        accuracy: [...currState.accuracy, action.accuracy],
      };
    case ERROR:
      return {
        ...currState,
        error: [...currState.error, action.error],
      };

    default:
      return currState;
  }
};
