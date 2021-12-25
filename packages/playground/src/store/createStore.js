import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { colorReducer } from '@apps/NameTheColor/store';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: { ntc: colorReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});
sagaMiddleware.run(rootSaga);
