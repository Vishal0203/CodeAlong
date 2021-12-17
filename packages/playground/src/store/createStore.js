import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { ntcReducers } from '@apps/NameTheColor/store';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: { ntc: ntcReducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});
sagaMiddleware.run(rootSaga);
