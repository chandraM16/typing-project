import { RESET, COUNT, ACCURACY } from "./constant";

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

export const updateAccuracy = (accuracy) => {
  return {
    type: ACCURACY,
    accuracy,
  };
};
