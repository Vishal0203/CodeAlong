import { NavItemProps } from '@commons/types';
import paths from '@commons/paths';

export const NAV_ITEMS: NavItemProps[] = [
  {
    label: 'Problems',
    link: paths.problems(),
  },
  {
    label: 'Polyfills',
    link: paths.polyfills(),
  },
];
