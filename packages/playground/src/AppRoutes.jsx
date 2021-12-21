import React from 'react';
import { Routes, Route } from 'react-router-dom';

import paths from '@commons/paths';
import { Layout } from '@commons/components';
import { Home, NameTheColor } from '@apps';

const AppRoutes = () => (
  <Routes>
    <Route path={paths.home()} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={paths.ntc()} element={<NameTheColor />} />
    </Route>
  </Routes>
);

export default AppRoutes;
