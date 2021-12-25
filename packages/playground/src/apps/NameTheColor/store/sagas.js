import { takeEvery, put, all } from 'redux-saga/effects';
import { ACTIONS, updateColorDetails } from './dispatchers';

function* fetchColorByHex({ hexCode }) {
  try {
    const response = yield fetch(`http://localhost:8080/colors/hex/${hexCode}`);
    const data = yield response.json();
    yield put(updateColorDetails(data));
  } catch (e) {
    console.error(e);
  }
}

function* fetchColorByRgb({ rgbCode }) {
  try {
    const response = yield fetch(`http://localhost:8080/colors/rgb/${rgbCode}`);
    const data = yield response.json();
    yield put(updateColorDetails(data));
  } catch (e) {
    console.error(e);
  }
}

function* watchFetchColorByHex() {
  yield takeEvery(ACTIONS.FETCH_COLOR_BY_HEX, fetchColorByHex);
}

function* watchFetchColorByRgb() {
  yield takeEvery(ACTIONS.FETCH_COLOR_BY_RGB, fetchColorByRgb);
}

export default function* ntcSaga() {
  yield all([watchFetchColorByRgb(), watchFetchColorByHex()]);
}
