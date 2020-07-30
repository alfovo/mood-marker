import * as MoodActionTypes from "../actionTypes/types";

const initialState = [
  {
    name: "Surprised",
    icon: 1,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  },
  {
    name: "Content",
    icon: 1,
    time: "1:20 am",
    date: "12-19-1900"
  },
  {
    name: "Tired",
    icon: 0,
    time: "1:20 am",
    date: "12-19-1900"
  }
];

export default function Mood(state = initialState, action) {
  switch (action.type) {
    case MoodActionTypes.ADD_MOOD:
      return [
        ...state,
        {
          name: action.name,
          icon: action.icon,
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString()
        }
      ];
    case MoodActionTypes.REMOVE_MOOD:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}
