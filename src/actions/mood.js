import * as MoodActionTypes from "../actionTypes/types";

export const addMood = mood => {
  return {
    type: MoodActionTypes.ADD_MOOD
  };
};

export const removeMood = index => {
  return {
    type: MoodActionTypes.REMOVE_MOOD,
    index
  };
};
