import { RESET, ACCURACY, COUNT,  } from "./constant";

const initialState = {
  error: 0,
  speed: 0,
  accuracy: 0,
  count: 0,
};

export const typing = (currState = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        error: 0,
        speed: 0,
        accuracy: 0,
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
        accuracy: action.accuracy,
      };

    default:
      return currState;
  }
};
