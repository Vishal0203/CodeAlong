import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from '@commons/components';
import { Home, NameTheColor } from '@apps';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="name-the-color" element={<NameTheColor />} />
    </Route>
  </Routes>
);

export default AppRoutes;
