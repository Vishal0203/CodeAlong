import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import '@styles/global.scss';

render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);
