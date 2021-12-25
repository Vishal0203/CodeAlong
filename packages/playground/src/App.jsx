import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '@store/createStore';
import AppRoutes from './AppRoutes';
import '@styles/globals.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
