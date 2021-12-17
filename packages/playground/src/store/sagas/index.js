import { all } from 'redux-saga/effects';
import { ntcSaga } from '@apps/NameTheColor/store';

export default function* rootSaga() {
  yield all([ntcSaga()]);
}
