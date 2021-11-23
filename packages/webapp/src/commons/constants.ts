import { INavItem } from '@commons/types';
import paths from '@commons/paths';

export const NAV_ITEMS: INavItem[] = [
  {
    label: 'Playground',
    link: paths.playground(),
  },
  {
    label: 'Problems',
    link: paths.problems(),
  },
  {
    label: 'Polyfills',
    link: paths.polyfills(),
  },
];
