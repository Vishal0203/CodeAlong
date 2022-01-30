import React from 'react';
import { Routes, Route } from 'react-router-dom';

import paths from '@commons/paths';
import { Layout } from '@commons/components';
import { HomeApp, NtcApp, ArrayPolyfills } from './SuspendedRoutes';

const AppRoutes = () => (
  <Routes>
    <Route path={paths.home()} element={<Layout />}>
      <Route index element={HomeApp} />
      <Route path={paths.ntc()} element={NtcApp} />
      <Route path={paths.arrays()} element={ArrayPolyfills} />
    </Route>
  </Routes>
);

export default AppRoutes;
