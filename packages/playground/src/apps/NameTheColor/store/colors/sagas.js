import { all, takeEvery } from 'redux-saga/effects';
import { ACTIONS } from './dispatchers';

function* fetchColorByHex() {
  console.log('logging from saga');
  yield 'todo: call by hex';
}

function* fetchColorByRgb() {
  yield 'todo: call by rgb';
}

function* watchFetchColorByHex() {
  yield takeEvery(ACTIONS.FETCH_COLOR_BY_HEX, fetchColorByHex);
}

function* watchFetchColorByRgb() {
  yield takeEvery(ACTIONS.FETCH_COLOR_BY_RGB, fetchColorByRgb);
}

export default function* colorSaga() {
  yield all([watchFetchColorByHex(), watchFetchColorByRgb()]);
}
