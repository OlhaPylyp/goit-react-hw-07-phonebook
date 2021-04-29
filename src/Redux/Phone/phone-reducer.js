import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./phone-actions";

const items = createReducer([], {
  [actions.getContactsSuccess]: (_, { payload }) => payload,
  [actions.addSuccess]: (state, { payload }) => [...state, payload],
  // [actions.getContactsSuccess]: (state, { payload }) => payload,

  [actions.deleteChangeSuccess]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload),
  ],
});

// const error = createReducer("", {
//   [actions.getContactsFailure]: (state, { payload }) => payload,
//   [actions.deleteChangeFailure]: (state, { payload }) => payload,
//   [actions.addFailure]: (state, { payload }) => payload,
// });
const error = createReducer(null, {});
const filterReducer = createReducer("", {
  [actions.filterChange]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.getContactsRequest]: () => true,
  [actions.getContactsSuccess]: () => false,
  [actions.getContactsFailure]: () => false,
  [actions.addContactsRequest]: () => true,
  [actions.addSuccess]: () => false,
  [actions.addFailure]: () => false,
  [actions.filterChange]: () => false,
  [actions.deleteContactsRequest]: () => true,
  [actions.deleteChangeSuccess]: () => false,
  [actions.deleteChangeFailure]: () => false,
});

export default combineReducers({
  items,
  filter: filterReducer,
  error,
  loading,
});
