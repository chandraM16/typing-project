import { RESET, COUNT, ACCURACY, ERROR } from "./constant";

export const resetStat = () => {
  return {
    type: RESET,
  };
};
export const updateCount = () => {
  return {
    type: COUNT,
  };
};
export const updateError = (error) => {
  return {
    type: ERROR,
    error,
  };
};

export const updateAccuracy = (accuracy) => {
  return {
    type: ACCURACY,
    accuracy,
  };
};
