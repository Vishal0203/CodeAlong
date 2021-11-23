import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Problems, Polyfills, Playground } from '@apps';
import { NavBar, Footer } from '@commons/components';
import { NAV_ITEMS } from '@commons/constants';
import paths from '@commons/paths';

const AppRoutes = () => (
  <>
    <NavBar options={NAV_ITEMS} />
    <Routes>
      <Route path={paths.home()} element={<Home />} />
      <Route path={paths.problems()} element={<Problems />} />
      <Route path={paths.polyfills()} element={<Polyfills />} />
      <Route path={paths.playground()} element={<Playground />} />
    </Routes>
    <Footer />
  </>
);

export default AppRoutes;
