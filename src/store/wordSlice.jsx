import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "./storage";

const wordSlice = createSlice({
  name: "words",
  initialState: loadState() || [],
  reducers: {
    handleAdd: (state, action) => {
      state.push(action.payload);
    },
    toggleMove: (state, action) => {
      const updatedItems = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, learned: !item.learned };
        }
        return item;
      });
      return (state = updatedItems);
    },
    deleteWord: (state, action) => {
      return state.filter((word) => word.id !== action.payload);
    },
    editWord: (state, action) => {
      const updatedItems = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            term: action.payload.term,
            definition: action.payload.definition,
          };
        }
        return item;
      });
      return (state = updatedItems);
    },
  },
});
export const { actions, reducer } = wordSlice;
export const { handleAdd, toggleMove, deleteWord, editWord } =
  wordSlice.actions;
export default function mySliceReducer(state, action) {
  const newState = reducer(state, action);
  saveState(newState);
  return newState;
}
