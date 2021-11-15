import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Problems, Polyfills } from '@apps';
import { NavBar } from '@commons/components';
import { NAV_ITEMS } from '@commons/constants';
import paths from '@commons/paths';

const AppRoutes = () => (
  <>
    <NavBar options={NAV_ITEMS} />
    <Routes>
      <Route path={paths.home()} element={<Home />} />
      <Route path={paths.problems()} element={<Problems />} />
      <Route path={paths.polyfills()} element={<Polyfills />} />
    </Routes>
  </>
);

export default AppRoutes;
