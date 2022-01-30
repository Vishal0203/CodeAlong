import React from 'react';
import { suspend } from '@commons/hocs';

export const HomeApp = suspend({
  componentLoader: () =>
    import(
      /* webpackChunkName: 'home' */
      '@apps/Home'
    ),
});

export const NtcApp = suspend({
  componentLoader: () =>
    import(
      /* webpackChunkName: 'ntc' */
      '@apps/NameTheColor'
    ),
});

export const ArrayPolyfills = suspend({
  componentLoader: () =>
    import(
      /* webpackChunkName: 'arrays' */
      '@apps/ArrayPolyfills'
    ),
});
