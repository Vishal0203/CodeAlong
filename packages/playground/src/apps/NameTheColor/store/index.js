import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { colorSaga, colorReducer } from './colors';

export const ntcReducers = combineReducers({ colors: colorReducer });
export function* ntcSaga() {
  yield all([colorSaga()]);
}
